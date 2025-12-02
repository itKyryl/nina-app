import 'dotenv/config';
import path from 'node:path';
import { env, defineConfig } from 'prisma/config';


export default defineConfig({
  schema: path.join('src', 'prisma', 'schema'),
  datasource: {
    url: env('DATABASE_URL')
  },
  migrations: {
    path: "src/prisma/migrations"
  }
});