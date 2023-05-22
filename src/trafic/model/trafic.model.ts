import {Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript"; 
import { Typetransport } from "src/typetransport/model/typetransport.model";

  @Table({tableName:'trafic'})
  export class Trafic extends Model<Trafic>{
    @ForeignKey(()=>Typetransport)
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    index_trafic: number;

    @Column({type: DataType.DOUBLE})
    price_of_1: number;
  }