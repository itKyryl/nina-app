import { FacebookApiConstructorDto } from "../../../domain/repository/api/facebook/common.types";
import IFacebookApiRepository from "../../../repositories/api/facebook/facebook-api.repository.interface";

export default interface IFacebookApiRepositoryFactory {
  create(constructorInput: FacebookApiConstructorDto): IFacebookApiRepository;
}
