import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript"; 
import { Users } from "src/users/model/user.model";

  @Table({tableName:'wallet', timestamps:false})
  export class Wallet extends Model<Wallet>{
    @ForeignKey(()=>Users)
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    index_wallet: number;

    @Column({type: DataType.DOUBLE, defaultValue:0})
    balance: number;

    @Column({type: DataType.STRING, unique: true})
    qr_code: string;
  }