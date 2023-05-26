import {Column, DataType, HasMany,ForeignKey, Model, Table, BelongsTo} from "sequelize-typescript"; 
import { Stan } from "src/stan/model/stan.model";
import { Trip } from "src/trip/model/trip.model";
import { Typetransport } from "src/typetransport/model/typetransport.model";

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

    @Column({type: DataType.DOUBLE, allowNull:false})
    battery: number;

    @ForeignKey(() => Stan)
    @Column({type: DataType.INTEGER, allowNull:false})
    stan_id:number;

    @BelongsTo(() => Stan, 'stan_id')
    stan: Stan;

    @ForeignKey(() => Typetransport)
    @Column({type: DataType.INTEGER, allowNull:false})
    type_id:number;

    @BelongsTo(() => Typetransport, 'type_id')
    type: Typetransport;

    @HasMany(() => Trip, 'transport_id')
    transport: Trip[];

  }