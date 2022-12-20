import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producer } from 'apps/producer/src/producer/producer.entity';
import { Transaction } from 'apps/transaction/src/transaction/transaction.entity';
//import { ConsumerController } from './consumer.controller';
//import { Consumer } from './consumer.entity';
import { ApicurioSchemaService } from './apicurio.service';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({

      
    autoLoadEntities: true,
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'Complutense123?',
    database: 'actividad',
    //entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    retryDelay: 3000,
    retryAttempts: 10,
    })],
    
  
  //controllers: [ConsumerController],
  providers: [ApicurioSchemaService],

})

export class ApicurioModule {}