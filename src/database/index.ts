import { Sequelize } from "sequelize-typescript";

const sequelize: Sequelize = new Sequelize({
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB || "test",
  host: process.env.DB_HOST || "localhost",
  dialect: "mysql",
});

export default sequelize;
