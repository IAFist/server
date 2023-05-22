import { HasMany } from "sequelize";
import {BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript"; 
import { Coordinats } from "src/coordinats/model/coordinats.model";
import { Wallet } from "src/wallet/model/wallet.model";

  @Table({tableName:'place'})
  export class Place extends Model<Place>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    index_place: number;

    @Column({type: DataType.STRING, unique: true, allowNull:false})
    city: string;

    @ForeignKey(()=>Coordinats)
    coordinats_id: number;

    @HasOne (()=>Coordinats)
    coordinats: Coordinats;
  }