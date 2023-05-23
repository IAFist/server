import {Column, DataType, HasMany,ForeignKey, Model, Table} from "sequelize-typescript"; 
import { Stan } from "src/stan/model/stan.model";

  @Table({tableName:'transport'})
  export class Transport extends Model<Transport>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    transport_index: number;
    
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    qr_code: string;

    @Column({type: DataType.DOUBLE, allowNull:false})
    corX: number;
  
    @Column({type: DataType.DOUBLE, allowNull:false})
    corY: number;

    @ForeignKey(()=>Stan)
    @Column({type: DataType.INTEGER, allowNull:false})
    stan_id:number;

    @HasMany(() => Stan)
    stan:Stan;
  }