import { BaseController } from "../BaseController";
import { SettingsFindManyUseCaseInputDto, SettingsFindManyUseCaseOutputDto } from "../../domain/use-cases/settings-find-many.types";
import SettingsFindManyUseCase from "../../use-cases/settings-find-many";

class SettingsFindManyController extends BaseController<SettingsFindManyUseCaseInputDto, SettingsFindManyUseCaseOutputDto, void> {
  constructor(private readonly dependency: { useCase: SettingsFindManyUseCase; }
  ) { super() }

  async useCasesImplementation(params: SettingsFindManyUseCaseInputDto) {
    return this.dependency.useCase.execute(params);
  }
}

export default SettingsFindManyController;
