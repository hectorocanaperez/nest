import { IsArray, IsBoolean, IsDate, IsDateString, isJSON, IsJSON, IsObject, IsString} from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
//import { isStringObject } from 'util/types';

export class ProducerDto {
   

    id:number;


    @IsString()
    @ApiProperty()
    transactionId?:string;

    @IsString()
    @ApiProperty()
    flowId:string;

    @IsDateString()
    @ApiProperty()
    time: string;

    @IsString()
    @ApiProperty()
    type: string;

    @IsBoolean()
    @ApiProperty()
    process:boolean;
    

    @IsObject()
    @ApiProperty()
    data:{
        // status:string;
        // step:string;
    }
   
}