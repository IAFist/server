import { Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript"; 
import { Trafic } from "src/trafic/model/trafic.model";
import { Wallet } from "src/wallet/model/wallet.model";

  @Table({tableName:'type_transport'})
  export class Typetransport extends Model<Typetransport>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    index_type_transport: number;

    @Column({type: DataType.STRING})
    type_transport_name: string;

    @ForeignKey(()=>Trafic)
    trafic_id: number;

    @HasOne (()=>Trafic)
    trafic:Trafic;
  }