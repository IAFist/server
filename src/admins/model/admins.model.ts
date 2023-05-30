import {Column, DataType, Model, Table} from "sequelize-typescript"; 

  @Table({tableName:'admins'})
  export class Admins extends Model<Admins>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    admin_index: number;

    @Column({type: DataType.STRING, unique: true, allowNull:false})
    email: string;

    @Column({type: DataType.STRING, unique: true, allowNull:false})
    password: string;
  }