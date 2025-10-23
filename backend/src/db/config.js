// import dotenv from "dotenv";
// dotenv.config();

// export const dbConfig = {
//   dialect: process.env.DATABASE_DIALECT || "postgres",
//   database: process.env.DB_NAME,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   storage: process.env.DB_STORAGE, // solo usado por sqlite
//   logging: false
// };



import dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV || 'dev';  // dev, prod, test

const configs = {
  dev: {
    dialect: process.env.DEV_DATABASE_DIALECT,
    database: process.env.DEV_DB_NAME,
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASS,
    host: process.env.DEV_DB_HOST,
    port: process.env.DEV_DB_PORT,
    storage: process.env.DEV_DB_STORAGE || undefined,
  },
  prod: {
    dialect: process.env.PROD_DATABASE_DIALECT,
    database: process.env.PROD_DB_NAME,
    username: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASS,
    host: process.env.PROD_DB_HOST,
    port: process.env.PROD_DB_PORT,
    storage: process.env.PROD_DB_STORAGE || undefined,
  },
  test: {
    dialect: process.env.TEST_DATABASE_DIALECT,
    database: process.env.TEST_DB_NAME,
    username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASS,
    host: process.env.TEST_DB_HOST,
    port: process.env.TEST_DB_PORT,
    storage: process.env.TEST_DB_STORAGE || undefined,
  }
};

export default configs[env];
