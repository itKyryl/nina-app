import { SettingsFindManyUseCaseInputDto, SettingsFindManyUseCaseOutputDto } from "../../domain/use-cases/settings-find-many.types";
import ISettingsDatabaseRepository from "../../repositories/database/settings/settings-database.repository.interface";
import IBaseUseCase from "../BaseUseCase.interface";

export default class SettingsFindManyUseCase
  implements
    IBaseUseCase<
      SettingsFindManyUseCaseInputDto,
      SettingsFindManyUseCaseOutputDto
    >
{
  constructor(
    private readonly dependency: {
      taskDatabaseRepository: ISettingsDatabaseRepository;
    },
  ) {}

  async execute(
    input: SettingsFindManyUseCaseInputDto,
  ) {
    return this.dependency.taskDatabaseRepository.findMany(input.filters);
  }
}
