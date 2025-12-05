import { Injectable } from "@nestjs/common";
import prisma from "@repo/core/clients/prisma/index";

import GetAccountsForExternalPurposesController from '@repo/core/controllers/get-accounts-for-external-purposes/GetAccountsForExternalPurposes.controller';
import { TrafficSourceAccountFilters } from "@repo/core/domain/repository/database/traffic-source-account/common.types";
import TrafficSourceAccountPrismaRepository from "@repo/core/repositories/database/traffic-source-account/traffic-source-account-prisma.repository";
import { GetAccountsForExternalPurposesUseCase } from "@repo/core/use-cases/get-accounts-for-external-purposes/get-accounts-for-external-purposes.use-case";

@Injectable()
export class AccountService {
  async getMany(filters: TrafficSourceAccountFilters) {
    const getAccountsForExternalPurposesController =
      new GetAccountsForExternalPurposesController({
        getAccountsForExternalPurposesUseCase:
          new GetAccountsForExternalPurposesUseCase({
            accountDatabaseRepository: new TrafficSourceAccountPrismaRepository(prisma),
          }),
      });

    return await getAccountsForExternalPurposesController.runUseCaseImplementation(
      filters,
    );
  }
}
