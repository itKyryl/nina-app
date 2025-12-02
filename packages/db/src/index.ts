import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./prisma/generated/client";
export { Prisma } from './prisma/generated/client';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL});

const prismaClientSingleton = () => {
  return new PrismaClient({
    adapter
  });
};

declare const globalThis: {
  prismaGlobal?: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

globalThis.prismaGlobal = prisma;

export type PrismaRepositoryClient = PrismaClient;