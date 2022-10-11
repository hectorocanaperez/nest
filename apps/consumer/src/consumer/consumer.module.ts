import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producer } from 'apps/producer/src/producer/producer.entity';
import { Transaction } from 'apps/transaction/src/transaction/transaction.entity';
//import { ReducerModule } from 'reducers/reducer.module';
import { ReducerStore } from '../../../../reducers/reducer.store';
import { ConsumerController } from './consumer.controller';
//import { Consumer } from './consumer.entity';
import { ConsumerService } from './consumer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction,Producer]),
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
    
  
  controllers: [ConsumerController],
  providers: [ConsumerService,ReducerStore,Logger],
})
export class ConsumerModule {}
