import BaseRoute from "./BaseRoute";
import { Request, Response } from "express";
import BarangModel from "../models/BarangModel";
import { BarangAuthById, BarangAuthPost, BarangAuthEdit } from "../middleware/BarangMiddleware";
import Barang from "../services/BarangService";

type responseMessaage = {
  status: number;
  message: string;
  data?: BarangModel;
};

class BarangRoute extends BaseRoute {
  public configRoute(): void {
    this.route.get("/", async (req: Request, res: Response): Promise<Response> => {
      let response: responseMessaage;
      try {
        response = {
          status: 200,
          message: "ok",
          data: await Barang.getall(),
        };
      } catch (error) {
        response = {
          status: 500,
          message: "no data",
        };
      }
      return res.status(response.status).json(response);
    });

    this.route.get("/:id", BarangAuthById, async (req: Request, res: Response): Promise<Response> => res.status(200).json({ status: 200, message: "ok", data: await Barang.getOne(req.params.id) }));

    this.route.post("/add", BarangAuthPost, async (req: Request, res: Response): Promise<Response> => {
      const { namaBarang, jumlahBarang, hargaBarang } = req.body;
      let response: responseMessaage;

      try {
        response = {
          status: 201,
          message: "success",
          data: await Barang.create({ namaBarang, jumlagBarang: jumlahBarang ? jumlahBarang : 0, hargaBarang }),
        };
      } catch (error) {
        response = {
          status: 500,
          message: "error",
        };
      }

      return res.status(response.status).json(response);
    });

    this.route.put("/edit/:id", BarangAuthEdit, async (req: Request, res: Response): Promise<Response> => {
      const { id } = req.params;
      const { namaBarang, jumlahBarang, hargaBarang } = req.body;
      let response: responseMessaage;
      try {
        response = {
          status: 200,
          message: "success",
        };
        await Barang.update({ id, namaBarang, jumlahBarang: jumlahBarang ? jumlahBarang : 0, hargaBarang });
      } catch (error) {
        response = {
          status: 500,
          message: "error",
        };
      }
      return res.status(response.status).json(response);
    });

    this.route.delete("/delete/:id", BarangAuthById, async (req: Request, res: Response): Promise<Response> => {
      const { id } = req.params;
      let response: responseMessaage;
      try {
        response = {
          status: 200,
          message: "success",
        };
        await Barang.destroy(id);
      } catch (error) {
        response = {
          status: 500,
          message: "error",
        };
      }
      return res.status(response.status).json(response);
    });
  }
}

export default new BarangRoute().route;
