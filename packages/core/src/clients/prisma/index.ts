import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated";


const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

const prismaClientSingleton = () => new PrismaClient({ adapter });

// Runtime-safe global
const globalWithPrisma = globalThis as any;

const prisma: PrismaClient = globalWithPrisma.prismaGlobal ?? prismaClientSingleton();

globalWithPrisma.prismaGlobal = prisma;

export default prisma;
export type PrismaRepositoryClient = PrismaClient;