import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript"; 

  @Table({tableName:'stan', timestamps:false})
  export class Stan extends Model<Stan>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    index_stan: number;

    @Column({type: DataType.STRING})
    status: string;
  }