"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prisma = void 0;
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("./prisma/generated/client");
var client_2 = require("./prisma/generated/client");
Object.defineProperty(exports, "Prisma", { enumerable: true, get: function () { return client_2.Prisma; } });
const adapter = new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL });
const prismaClientSingleton = () => {
    return new client_1.PrismaClient({
        adapter
    });
};
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
exports.default = prisma;
globalThis.prismaGlobal = prisma;
