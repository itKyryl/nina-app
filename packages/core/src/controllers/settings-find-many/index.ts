import { BaseController } from "../BaseController";
import { SettingsFindManyUseCase } from "../../use-cases";
import { SettingsFindManyUseCaseInputDto, SettingsFindManyUseCaseOutputDto } from "../../domain/use-cases/settings-find-many.types";

class SettingsFindManyController extends BaseController<SettingsFindManyUseCaseInputDto, SettingsFindManyUseCaseOutputDto, void> {
  constructor(private readonly dependency: { useCase: SettingsFindManyUseCase; }
  ) { super() }

  async useCasesImplementation(params: SettingsFindManyUseCaseInputDto) {
    return this.dependency.useCase.execute(params);
  }
}

export default SettingsFindManyController;
