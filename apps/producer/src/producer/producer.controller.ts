
import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { ProducerDto } from './producer.dto';
import { Producer } from './producer.entity';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('producers')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Get()
  async getHello() {
    return this.producerService.getHello();
  }
  @Get('todos')
  @ApiOperation({summary:'get all events'})
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
            type:'string',
            example:'99cee408-2add-483e-aa7e-d387e6273b92',
            description:'have to be a transactionId of transactions'
          },
          time:{
            type:'Date',
            example:'2022-10-19 16:30:00.194285',
            description:'this is the date of event'
  
          },
          type:{
            type:'string',
            example:'statusChanged',
            description:'represent the type of event'
          },
          flowId:{
            type:'string',
            example:'415e0bd0-9bd5-406c-a6b3-84b7ef824cf5',
            description:'this is the Id of event´s schemaRegistry '
          },
          data:{
            type:'object',
            properties:{
              status:{
                type:'string',
              },
              step:{
                type:'string'
              }
            },
            description:'contains data of status and step'
            
          }
  
        }
      }
    }
  })
  async getAll(){
    return this.producerService.getAll();
  }

 @Post('producers')
 @ApiOperation({summary:'create a event'})
 @ApiResponse({
   status:400,
   description:'param invalids'
 })
 @ApiResponse({
   status:201,
   description:'create a new event'
 })
 @ApiBody
// ({type:ProducerDto})
 ({
   schema:{
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
       type:{
        type:'string',
        example:'statusChanged',
        description:'type of event'
      },
      flowId:{
        type:'string',
        example:'415e0bd0-9bd5-406c-a6b3-84b7ef824cf5',
        description:'this is the Id of event´s schemaRegistry'
      },
      data:{
        type:'object',
        properties:{
          status:{
            type:'string',
          },
          step:{
            type:'string'
          }
        },
        description:'contains data of status and step'
      }

     }
   }
 })
  async createProducer(@Body(ValidationPipe) req: ProducerDto){
      return this.producerService.create(req)
  }

  
}
