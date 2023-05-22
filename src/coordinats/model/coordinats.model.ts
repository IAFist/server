import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript"; 
import { Place } from "src/place/model/place.model";

  @Table({tableName:'coordinats', timestamps:false})
  export class Coordinats extends Model<Coordinats>{
    @ForeignKey(()=>Place)
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    coordinats_id: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corX_1: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corY_1: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corX_2: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corY_2: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corX_3: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corY_3: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corX_4: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corY_4: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corX_5: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corY_5: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corX_6: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corY_6: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corX_7: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corY_7: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corX_8: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corY_8: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corX_9: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corY_9: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corX_10: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    corY_10: number;
  }