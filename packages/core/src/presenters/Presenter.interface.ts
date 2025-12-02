export default interface IPresenter<UseCaseOutput, PresenterOutput> {
  present(input: UseCaseOutput): PresenterOutput;
}
