import {Column, DataType, HasMany,ForeignKey, Model, Table, BelongsTo} from "sequelize-typescript"; 
import { Place } from "src/place/model/place.model";
import { Transport } from "src/transport/model/transport.model";
import { Users } from "src/users/model/user.model";

  @Table({tableName:'trip'})
  export class Trip extends Model<Trip>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    index_trip: number;
    
    @ForeignKey(() => Transport)
    @Column({type: DataType.INTEGER})
    transport_id:number;

    @BelongsTo(() => Transport, 'transport_id')
    transport: Transport;

    @ForeignKey(() => Users)
    @Column({type: DataType.INTEGER})
    user_id:number;

    @BelongsTo(() => Users, 'user_id')
    user: Users;

    @ForeignKey(() => Place)
    @Column({type: DataType.INTEGER})
    place_id:number;

    @BelongsTo(() => Place, 'place_id')
    place: Place;

    @Column({ type: "timestamp"})
    time_start: Date;

    @Column({ type: "timestamp"})
    time_end: Date;

    @Column({type: DataType.FLOAT})
    duration: number;

    @Column({type: DataType.FLOAT})
    cost: number;

    @Column({type: DataType.STRING})
    foto: string;
  }