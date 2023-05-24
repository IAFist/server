import { Stan } from "src/stan/model/stan.model";

export class CreateTransportDto {
  
    readonly qr_code: string;
    readonly corX: number;
    readonly corY: number;
    readonly stan_id: number;
    readonly type_id: number;
  }
  