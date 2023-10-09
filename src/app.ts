import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
dotenv.config();

// route
import BarangRoute from "./routes/BarangRoute";

// database
import sequelize from "./database";

class App {
  private port: string | number;
  private app: Express;

  constructor() {
    this.port = process.env.PORT || 3000;
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use(morgan("dev"));
  }

  private routes(): void {
    this.app.use("/barang", BarangRoute);
  }

  public async run(): Promise<void> {
    try {
      await sequelize.sync({ force: false });
      this.app.listen(this.port, () => console.log(`your backend listen on : ${this.port}`));
    } catch (error) {
      console.error("Error syncing database:", error);
    }
  }
}

const app = new App();
app.run();
