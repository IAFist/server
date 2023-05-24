import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript"; 
import { Transport } from "src/transport/model/transport.model";

  @Table({tableName:'stan', timestamps:false})
  export class Stan extends Model<Stan>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    index_stan: number;

    @Column({type: DataType.STRING})
    status: string;

    @HasMany(() => Transport, 'stan_id')
    transports: Transport[];
  }