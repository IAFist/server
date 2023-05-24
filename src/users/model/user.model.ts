import {Column, DataType, ForeignKey, HasOne,HasMany, Model, Table} from "sequelize-typescript"; 
import { Trip } from "src/trip/model/trip.model";
import { Wallet } from "src/wallet/model/wallet.model";

interface UserCreationAttrs{
  email: string;
  phone: string;
  wallet_id: number;  
}
  @Table({tableName:'users'})
  export class Users extends Model<Users, UserCreationAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    user_index: number;

    @Column({type: DataType.STRING, unique: true, allowNull:false})
    email: string;

    @Column({type: DataType.STRING, unique: true, allowNull:false})
    phone: string;

    @Column({type: DataType.STRING, allowNull:false})
    name: string;
  
    @ForeignKey(()=>Wallet)
    wallet_id: number;

    @HasOne (()=>Wallet, {onDelete: "cascade"})
    wallet:Wallet;

    @Column({type: DataType.STRING, allowNull:false})
    kod: string;

    @HasMany(() => Trip, 'user_id')
    user: Trip[];
  }