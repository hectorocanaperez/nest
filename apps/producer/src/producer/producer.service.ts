import  { Transaction } from '../../../transaction/src/transaction/transaction.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { ProducerDto } from './producer.dto';
import { Producer } from './producer.entity';
import { ApicurioSchemaService } from '../../../../apicurioSchema/apicurio.service';
// import Ajv from 'ajv';

// const ajv = new Ajv() 

@Injectable()
export class ProducerService {
  
  constructor(@InjectRepository(Producer) private producerRepository: Repository<Producer>,private apicurioService:ApicurioSchemaService,
  @InjectRepository(Transaction) private transactionRepository: Repository<Transaction>){}




  async getHello(){
    return "Hello World!";
  }
  
  async getAll(): Promise<Producer[]> {
      return this.producerRepository.find()
  }

  async create(req: ProducerDto):Promise<Producer> {
    const schemaVal= await this.apicurioService.getSchema(req.flowId);
    try{
     
      console.log("este es el schema",schemaVal)
      const validar=await this.apicurioService.validate(schemaVal,req.data)
      
    }catch(e){
      console.log("error",e)
      throw new BadRequestException('el schema no es correcto')
    
    }
      
      const transactionS = await this.transactionRepository.findOne({
        
        where:{
          transactionId: req.transactionId
        }  
      
      });
  
      if (transactionS) {
  
        const producer = new Producer();
  
        producer.transactionId=transactionS.transactionId;
        producer.flowId=req.flowId;
        producer.type = req.type;
        producer.data=req.data;
        producer.process=req.process;
        // producer.data.status=req.data.status;
        // producer.data.step=req.data.step;
      
        console.log("esto es el producer creado",producer)
        return this.producerRepository.save(producer);
        

      } else {
        throw new BadRequestException(' producer nor created');
      }

  }
       
}


