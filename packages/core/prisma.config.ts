import 'dotenv/config';
import path from 'path';

import { env, defineConfig } from 'prisma/config';


export default defineConfig({
  schema: path.join('src', 'clients', 'prisma', 'schema'),
  datasource: {
    url: env('DATABASE_URL')
  },
  migrations: {
    path: "src/clients/prisma/migrations",
  }
});