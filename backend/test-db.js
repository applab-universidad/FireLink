// // test-db.js
// import { sequelize } from "./src/db/index.js";

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log(" Conexión establecida correctamente con la base de datos.");
//   } catch (error) {
//     console.error(" Error al conectar con la base de datos:");
//     console.error(error.message);
//   } finally {
//     await sequelize.close();
//   }
// })();


import sequelize from './src/db/index.js';

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa!');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
