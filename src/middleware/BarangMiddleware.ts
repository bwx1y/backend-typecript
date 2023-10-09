import { NextFunction, Request, Response } from "express";
import BarangModel from "../models/BarangModel";
import { body, validationResult } from "express-validator";
import Barang from "../services/BarangService";

const Auth = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ status: 400, message: errors.array()[0].msg, data: req.body });
  } else next();
};

export const BarangAuthById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params;
  try {
    const data: null | BarangModel = await Barang.getOne(id);
    if (!data) res.status(400).json({ status: 400, message: `no data id = ${id}` });
    else next();
  } catch (error) {
    res.status(500).json({ status: 500, message: error });
  }
};

export const BarangAuthPost = [
  body("namaBarang", "nama barang tidak boleh kosong").notEmpty().isString(),
  body("hargaBarang", "harga barang tidak boleh kosong").notEmpty().isNumeric(),
  body("jumlahBarang", "jumlah barang harus menggunakan angka").optional().isNumeric(),
  Auth,
];

export const BarangAuthEdit = [
  body("namaBarang", "nama barang tidak boleh kosong").notEmpty().isString(),
  body("hargaBarang", "harga barang tidak boleh kosong").notEmpty().isNumeric(),
  body("jumlahBarang", "jumlah barang harus menggunakan angka").notEmpty().isNumeric(),
  BarangAuthById,
  Auth,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const { namaBarang, hargaBarang, jumlahBarang } = req.body;
    try {
      const data: BarangModel | null = await Barang.getOne(id);

      namaBarang != data?.namaBarang || hargaBarang != data?.hargaBarang || jumlahBarang != data?.jumlahBarang
        ? next()
        : res.status(400).json({
            status: 400,
            message: "data masih sama dengan yang dulu",
            data: {
              namaBarang,
              jumlahBarang,
              hargaBarang,
            },
          });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error,
      });
    }
  },
];
