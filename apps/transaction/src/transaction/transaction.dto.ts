import { IsBoolean, IsDate, IsDateString, IsObject, isString, IsString,} from 'class-validator';
//import { ApiProperty } from "@nestjs/swagger";

export class TransactionDto {
   
    @IsString()
    transactionId:string;

  
    @IsString()
    flowId:string;

    @IsString()
    customId: string;

    @IsBoolean()
    process: boolean;

    @IsString()
    time: string;

    @IsObject()
    data:{
        
    }

    //status:string;
   
    
   
}