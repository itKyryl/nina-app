import { Controller, Post, Req, Version } from "@nestjs/common";
import { AccountService } from "./account.service";
import { Request } from "express";
import { TrafficSourceAccountFilters } from "@repo/core/domain/repository/database/traffic-source-account/common.types";

@Controller("account")
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post("get-many")
  @Version("2")
  async importV1(@Req() request: Request) {
    const reqParams = (request.body ?? {}) as TrafficSourceAccountFilters;
    return {
      version: "v2",
      ...(await this.accountService.getMany(reqParams)),
    };
  }
}
