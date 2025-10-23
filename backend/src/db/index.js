// import { Sequelize } from "sequelize";
// import { dbConfig } from "./config.js";

// let sequelize;

// if (dbConfig.dialect === "sqlite") {
//   sequelize = new Sequelize({
//     dialect: "sqlite",
//     storage: dbConfig.storage,
//     logging: dbConfig.logging,
//   });
// } else {
//   sequelize = new Sequelize(
//     dbConfig.database,
//     dbConfig.username,
//     dbConfig.password,
//     {
//       host: dbConfig.host,
//       port: dbConfig.port,
//       dialect: dbConfig.dialect,
//       logging: dbConfig.logging,
//     }
//   );
// }

// export { sequelize };


import { Sequelize } from 'sequelize';
import dbConfig from './config.js';

const { dialect, database, username, password, host, port, storage } = dbConfig;

const options = {
  dialect,
  logging: false, // o true para debug
};

if (dialect === 'sqlite' && storage) {
  options.storage = storage;
} else {
  options.host = host;
  options.port = port;
}

const sequelize = new Sequelize(database, username, password, options);

export default sequelize;
