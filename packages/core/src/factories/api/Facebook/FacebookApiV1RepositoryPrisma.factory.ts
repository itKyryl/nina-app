
import { FacebookApiConstructorDto } from "../../../domain/repository/api/facebook/common.types";
import FacebookApiV1Repository from "../../../repositories/api/facebook/facebook-api-v1.repository";
import IFacebookApiRepository from "../../../repositories/api/facebook/facebook-api.repository.interface";
import IFacebookApiRepositoryFactory from "./FacebookApiRepository.factory.interface";

export default class FacebookApiV1RepositoryFactory
  implements IFacebookApiRepositoryFactory
{
  create(constructorInput: FacebookApiConstructorDto): IFacebookApiRepository {
    return new FacebookApiV1Repository(constructorInput);
  }
 
}
