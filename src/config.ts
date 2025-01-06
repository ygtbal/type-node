import * as dotenv from 'dotenv';
const envFile = `${__dirname}/../.env.${process.env.NODE_ENV || 'development'}`;
dotenv.config({
  path: envFile
});
export const port = Number(process.env.API_PORT);
export const db_host = String(process.env.DB_HOST);
export const db_port = Number(process.env.DB_PORT);
export const db_name = String(process.env.DB_NAME);
export const db_user = String(process.env.DB_USER);
export const db_password = String(process.env.DB_PASSWORD);
