import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./prisma/generated/client";
export { Prisma } from './prisma/generated/client';
declare const prisma: PrismaClient<{
    adapter: PrismaPg;
}, never, import("./prisma/generated/runtime/client").DefaultArgs>;
export default prisma;
export type PrismaRepositoryClient = PrismaClient;
//# sourceMappingURL=index.d.ts.map