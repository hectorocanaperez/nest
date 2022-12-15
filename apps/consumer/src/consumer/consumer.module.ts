import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producer } from '../../../producer/src/producer/producer.entity';
import { Transaction } from '../../../transaction/src/transaction/transaction.entity';
//import { ReducerModule } from 'reducers/reducer.module';
import { ReducerStore } from '../../../../reducers/reducer.store';
import { ConsumerController } from './consumer.controller';
//import { Consumer } from './consumer.entity';
import { ConsumerService } from './consumer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction,Producer]),],
    
  
  controllers: [ConsumerController],
  providers: [ConsumerService,ReducerStore,Logger],
})
export class ConsumerModule {}
