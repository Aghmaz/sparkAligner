import * as dotenv from 'dotenv';
dotenv.config({ path: 'src/.env' });
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSource, Migration } from 'typeorm'

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_USERNAME:', process.env.DB_USERNAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  synchronize: true,
  autoLoadEntities: true,
};

export const OrmConfig = {
  migrations: ["src/config/1698314833693-sparkaligner.ts"],
  cli: {
      migrationsDir: "src/config/1698314833693-sparkaligner.ts"
  },
  // migrationsRun: true,
};

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  synchronize: false,
});

export default OrmConfig;
