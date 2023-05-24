import { BelongsTo, Column, DataType, ForeignKey,HasMany, HasOne, Model, Table} from "sequelize-typescript"; 
import { Transport } from "src/transport/model/transport.model";

  @Table({tableName:'type_transport', timestamps: false})
  export class Typetransport extends Model<Typetransport>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    index_type_transport: number;

    @Column({type: DataType.STRING})
    type_transport_name: string;
    @Column({type: DataType.DOUBLE})
    price_of_1: number;

    @HasMany(() => Transport, 'type_id')
    transports: Transport[];
  }