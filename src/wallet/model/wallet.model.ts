import {Column, DataType, HasOne, Model, Table} from "sequelize-typescript"; 

  @Table({tableName:'wallet'})
  export class Wallet extends Model<Wallet>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    index_wallet: number;

    @Column({type: DataType.DOUBLE})
    balance: number;

    @Column({type: DataType.STRING, unique: true})
    qr_code: string;

    @HasOne(()=>Wallet)
    user:Wallet;
  }