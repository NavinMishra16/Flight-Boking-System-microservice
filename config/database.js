const { Sequelize } = require('sequelize');
const dbConfig = {
  previewLimit: 50,
  server: "localhost",
  port: 33060,
  dialect: "postgres",
  database: "My-Flight-app-DB",
  username: "postgres",
  password: "admin",
  name: "My-Local-DB",
};

const sequelize = new Sequelize({
  dialect: dbConfig.dialect,
  host: dbConfig.server,
  port: dbConfig.port,
  database: dbConfig.database,
  username: dbConfig.username,
  password: dbConfig.password,
});
module.exports = sequelize;
