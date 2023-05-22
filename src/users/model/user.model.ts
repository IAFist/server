import { HasMany } from "sequelize";
import {BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript"; 
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

    @HasOne (()=>Wallet)
    wallet:Wallet;

    @Column({type: DataType.STRING, allowNull:false})
    kod: string;
  }