import prisma from "../../../db/src";
import {
  CreateLogInputDataT,
  CustomError,
} from "../domain/repository/database/log/create-log.types";
import LogPrismaRepository from "../repositories/database/log/log-prisma.repository";

/**
 *
 * @param e any error
 * @returns log id
 */
export async function handleLog(e: CustomError) {
  let logRepository = new LogPrismaRepository(prisma);

  let request: string | null = null;
  let response: string | null = null;
  let stack: string | null = e?.stack ?? null;
  let name: string | null = e?.name ?? null;
  let data: string | null = null;

  if(e.data) {
    try {
      data = JSON.stringify(e.data);
    } catch {}
  }

  try {
    request = e.config ? serializeRequestFromError(e.config) : null;
  } catch {}

  try {
    response = e.response ? serializeResponseFromError(e.response) : null;
  } catch {}

  const logData: CreateLogInputDataT = {
    isError: true,
    message: e?.message ?? "",
    request,
    name,
    response,
    stack,
    data
  };

  return await logRepository.createLog(logData);
}

function serializeResponseFromError(response: any) {
  const data = response.data;
  const status = response.status;

  return JSON.stringify({
    data,
    status,
  });
}

function serializeRequestFromError(request: any) {
  const baseURL = request.baseURL;
  const method = request.method;
  const url = request.url;
  const data = request.data;

  return JSON.stringify({
    data,
    baseURL,
    method,
    url,
  });
}
