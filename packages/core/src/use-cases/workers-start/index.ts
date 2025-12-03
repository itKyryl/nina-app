import IBaseUseCase from "../BaseUseCase.interface";
import ITaskDatabaseRepository from "../../repositories/database/task/task-database.repository.interface";
import { WorkersStartUseCaseInputDto, WorkersStartUseCaseOutputDto } from "../../domain/use-cases/workers-start.types";
import ISettingsDatabaseRepository from "../../repositories/database/settings/settings-database.repository.interface";
import Piscina from "piscina";
import { handleLog } from "../../utils/error";
import { delay } from "../../utils";

export default class WorkersStartUseCase
  implements
    IBaseUseCase<
      WorkersStartUseCaseInputDto,
      WorkersStartUseCaseOutputDto
    >
{
  constructor(
    private readonly dependency: {
      taskDatabaseRepository: ITaskDatabaseRepository;
      settingsDatabaseRepository: ISettingsDatabaseRepository;
    },
  ) {}

  async execute(
    input: WorkersStartUseCaseInputDto,
  ) {

    console.log('Test 5');
    let activeSettings = await this.getActiveSettings();

    const pool = new Piscina({
      filename: input.handlerPath,
      minThreads: activeSettings.minWorkerThreads,
      maxThreads: activeSettings.minWorkerThreads,
    });

    while (true) {
      const tasks = await this.dependency.taskDatabaseRepository.findMany({
        status: {
          eq: 'PENDING'
        }
      });
      
      for(const task of tasks) {
        try {
          const result = await pool.run(task);

          await this.dependency.taskDatabaseRepository.update(task.id, {
            error: null,
            status: "DONE",
            result: result,
            startTime: new Date(),


          })
        } catch (e: any) {
          const logNumber = await handleLog(e);
          await this.dependency.taskDatabaseRepository.update(task.id, {
            error: `Error message: ${e.message}. Full log ${logNumber}`,
            status: 'FAILED',
            endTime: new Date()
          })
        }
      }

      await delay(5000);

      // update active settings
      activeSettings = await this.getActiveSettings();
    }
  }

  protected async getActiveSettings() {
    const activeSettingsArray = await this.dependency.settingsDatabaseRepository.findMany({isActive: true});

    if(activeSettingsArray.length > 1) throw new Error(`App should contain only one active settings`);

    const activeSettings = activeSettingsArray[0];

    if(!activeSettings) throw new Error(`There is no active settings for the app - please create it`);

    return activeSettings;
  }
}
