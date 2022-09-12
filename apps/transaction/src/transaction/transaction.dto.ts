import { IsBoolean, IsDate, IsString,} from 'class-validator';
//import { ApiProperty } from "@nestjs/swagger";

export class TransactionDto {
   
    @IsString()
    transactionId:string;

  
    @IsString()
    customId: string;

    @IsBoolean()
    process: boolean;

    @IsDate()
    time: Date;

    //status:string;
   
    
   
}