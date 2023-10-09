import { DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import sequelize from "../database";

class BarangModel extends Model {
  public id!: string;
  public namaBarang!: string;
  public jumlahBarang!: number;
  public hargaBarang!: number;
}

BarangModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    namaBarang: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    jumlahBarang: {
      type: DataTypes.INTEGER,
    },
    hargaBarang: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "barangs",
    freezeTableName: true,
    timestamps: true,
    underscored: false,
  }
);

export default BarangModel;
