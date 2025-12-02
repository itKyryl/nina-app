export default interface IBaseUseCase<UseCaseInputData, UseCaseOutputData> {
  execute(data: UseCaseInputData): Promise<UseCaseOutputData>;
}
