export class CreateTripDto {
  
    readonly transport_id: number;
    readonly user_id: number;
    readonly place_id: number;
    readonly time_start: Date;
    readonly time_end: Date;
    readonly duration: number;
    readonly cost: number;
    readonly foto:string;
  }