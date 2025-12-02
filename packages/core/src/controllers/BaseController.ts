
import { CustomError } from "../domain/repository/database/log/create-log.types";
import IPresenter from "../presenters/Presenter.interface";
import { handleLog } from "../utils/error";

export type SuccessControllerReturn<PresenterOutput> = {
  error: false;
  message?: string;
  data: PresenterOutput;
};

export type ErrorControllerReturn = {
  error: true;
  message?: string;
};

export type HandleErrorT = (e: CustomError) => Promise<void>;

export interface IBaseControllerInputDataService<ControllerInput> {
  exec(input: ControllerInput): Promise<ControllerInput>;
}

export type ControllerReturn<PresenterOutput> =
  | SuccessControllerReturn<PresenterOutput>
  | ErrorControllerReturn;

export abstract class BaseController<
  ControllerInput,
  UseCaseOutput,
  PresenterOutput,
> {
  public async execute(
    input: ControllerInput,
    presenter: IPresenter<UseCaseOutput, PresenterOutput>,
  ): Promise<ControllerReturn<PresenterOutput>> {
    return await this.catchError(async () => {
      input = await this.inputModifier(input);

      const useCasesOutput = await this.useCasesImplementation(input);
      const presenterOutput = presenter.present(useCasesOutput);

      return presenterOutput;
    }, input);
  }

  private async catchError<T>(
    action: (input: ControllerInput) => Promise<T>,
    input: ControllerInput,
  ): Promise<ControllerReturn<T>> {
    try {
      return {
        data: await action(input),
        error: false,
        message: "Success",
      };
    } catch (e: any) {
      const logId = await handleLog(e);
      return {
        error: true,
        message: `Error log id ${logId}. Please pass it to administrator. ${e?.message}`,
      };
    }
  }

  private async inputModifier(
    input: ControllerInput,
  ): Promise<ControllerInput> {
    return input;
  }

  public async runUseCaseImplementation(input: ControllerInput) {
    return await this.catchError(async (input: ControllerInput) => {
      input = await this.inputModifier(input);
      return await this.useCasesImplementation(input);
    }, input);
  }

  protected abstract useCasesImplementation(
    input: ControllerInput,
  ): Promise<UseCaseOutput>;
}
