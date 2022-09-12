import { IsArray, IsDate, IsString} from 'class-validator'

export class ProducerDto {
   

    id:number;


    @IsString()
    transactionId:string;


    @IsDate()
    time:Date;

    @IsString()
    type: string;
    

    @IsString()
    status:string;

    //transaction: any;
  


   
    
   
}