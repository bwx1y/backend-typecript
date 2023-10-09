import { UUID } from "crypto";
import BarangModel from "../models/BarangModel";

type createPromis = {
  id?: UUID;
  namaBarang: string;
  jumlahBarang: number;
  hargaBarang: number;
};

class Barang {
  public static getall: Function = async () => await BarangModel.findAll();

  public static getOne: Function = async (id: UUID) =>
    await BarangModel.findOne({
      where: {
        id,
      },
    });

  public static create: Function = async (params: createPromis) =>
    await BarangModel.create({
      namaBarang: params.namaBarang,
      jumlagBarang: params.jumlahBarang,
      hargaBarang: params.hargaBarang,
    });

  public static update: Function = async (params: createPromis) =>
    await BarangModel.update(
      {
        namaBarang: params.namaBarang,
        jumlahBarang: params.jumlahBarang,
        hargaBarang: params.hargaBarang,
      },
      {
        where: {
          id: params.id,
        },
      }
    );

  public static destroy: Function = async (id: UUID) =>
    await BarangModel.destroy({
      where: {
        id,
      },
    });
}

export default Barang;
