import { AppendOrUpdateValuesInputDto, GoogleSheetAuthenticateInput } from "../../../../../domain/repository/api/google/google-sheet/common.types";


export default interface IGoogleSheetApiRepository {
  authenticate(input: GoogleSheetAuthenticateInput): Promise<void>;
  appendRow(input: AppendOrUpdateValuesInputDto): Promise<void>;
  updateRow(input: AppendOrUpdateValuesInputDto): Promise<void>;
}
