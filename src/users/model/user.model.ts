import {Column, DataType, Model, Table} from "sequelize-typescript"; 

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
  
    @Column({type: DataType.INTEGER, unique: true, allowNull:false})
    wallet_id: number;

    @Column({type: DataType.STRING, allowNull:false})
    kod: string;
  }