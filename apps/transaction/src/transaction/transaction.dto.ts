/* eslint-disable @typescript-eslint/ban-types */
import { IsBoolean, IsDateString, IsObject, IsString,} from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class TransactionDto {
   
    @IsString()
    @ApiProperty()
    transactionId:string;

  
    @IsString()
    @ApiProperty()
    flowId:string;

    @IsString()
    @ApiProperty()
    customId: string;

    @IsBoolean()
    @ApiProperty()
    process: boolean;

    @IsDateString()
    @ApiProperty()
    time: string;

    @IsObject()
    @ApiProperty()
    data:{
        
    }

}