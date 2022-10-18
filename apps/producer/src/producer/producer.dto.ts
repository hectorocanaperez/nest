import { IsArray, IsDate, IsDateString, isJSON, IsJSON, IsObject, IsString} from 'class-validator'
//import { isStringObject } from 'util/types';

export class ProducerDto {
   

    id:number;


    @IsString()
    transactionId:string;

    @IsString()
    flowId:string;

    @IsDateString()
    time:string;

    @IsString()
    type: string;
    

    @IsObject()
    data:{
        status:string;
        step:string;
    }
   
}