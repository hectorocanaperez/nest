import { IsBoolean, IsDate, IsDateString, IsObject, isString, IsString,} from 'class-validator';
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

    

    //status:string;
   

    
    
    
    
}