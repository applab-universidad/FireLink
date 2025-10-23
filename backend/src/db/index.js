
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
