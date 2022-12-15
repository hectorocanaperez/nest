import { Body, Controller, Get, Inject, Post, UseFilters, UseGuards, ValidationPipe,Logger,HttpStatus, HttpException } from '@nestjs/common';
import { TransactionDto } from './transaction.dto';
import { Transaction } from './transaction.entity';
import { TransactionsService } from './transaction.service';
import { ApiBody, ApiOperation,ApiResponse,ApiTags } from '@nestjs/swagger';
//import {HttpExceptionFilter} from './filter'





@ApiTags('transactions module')
@Controller('transactions')
export class TransactionsController {
  constructor(
    
    private readonly transactionsService: TransactionsService) {}

  @Get()
  async getHello() {
    return this.transactionsService.getHello();
  }

  @Get('todos')
  //@UseFilters(HttpExceptionFilter)
  @ApiOperation({summary:'get all transactions'})
  @ApiResponse({
    status:400,
    description:'param invalids'
  })
  @ApiResponse({
    status:200,
    description:'all Data list',schema:{
      type:'array',
      items:{
        type:'object',
        properties:{
          transactionId:{
            type:'uuid',
            example:'99cee408-2add-483e-aa7e-d387e6273b92',
            description:'this is unique value'
          },
          time:{
            type:'Date',
            example:'2022-10-19 16:30:00.194285',
            description:'this is the date of transaction'
  
          },
          customId:{
            type:'string',
            example:'22-bab',
            description:'represent customId'
          },
          flowId:{
            type:'string',
            example:'948031f7-0e28-4321-ad25-dde069f149b6',
            description:'this is the Id of schemaRegistry'
          },
          process:{
            type:'boolean',
            example:false
          },
          data:{
            type:'object',
            description:'contains data of jsonSchemaFaker'
          }
  
        }
      }
    }
  })

  
  async getAll(){
    return this.transactionsService.getAll();
  }

  @Post('transactions')
  //@UseFilters(new HttpExceptionFilter())
  @ApiOperation({summary:'create a transaction'})
  @ApiResponse({
    status:400,
    description:'param invalids'
  })
  @ApiResponse({
    status:201,
    description:'create a new transaction'
  })
  @ApiBody
 // ({type:TransactionDto})
  ({
    schema:{
      type:'object',
      properties:{
        transactionId:{
          type:'uuid',
          example:'99cee408-2add-483e-aa7e-d387e6273b92',
          description:'this is the value of transactionId, transactionId needs be in transactions'
        },
        time:{
          type:'Date',
          example:'2022-10-19 16:30:00.194285',
          description:'this is the date of event'

        },
        customId:{
          type:'string',
          example:'1111-aaa',
          description:'represent customId'
        },
        flowId:{
          type:'string',
          example:'948031f7-0e28-4321-ad25-dde069f149b6',
          description:'this is the Id of schemaRegistry'
        },
        process:{
          type:'boolean',
          example:false
        },
        data:{
          type:'object',
          description:'contains data of jsonSchemaFaker'
        }

      }
    }
  })
   async createTransaction(@Body(ValidationPipe) req: TransactionDto){
    
     return this.transactionsService.create(req)
   }
  
}
