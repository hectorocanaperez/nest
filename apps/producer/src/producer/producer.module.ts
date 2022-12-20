import { Transaction } from '../../../transaction/src/transaction/transaction.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerController } from './producer.controller';
import { Producer } from './producer.entity';
import { ProducerService } from './producer.service';
import { TransactionsController } from '../../../transaction/src/transaction/transaction.controller';
import { TransactionsService } from '../../../transaction/src/transaction/transaction.service';
import { ApicurioSchemaService } from '../../../../apicurioSchema/apicurio.service';
import { ApicurioModule } from '../../../../apicurioSchema/apicurio.module';


@Module({
  imports: [ TypeOrmModule.forFeature([Producer]),TypeOrmModule.forFeature([Transaction]),ApicurioModule],
  controllers: [ProducerController,TransactionsController],
  providers: [ProducerService,TransactionsService,ApicurioSchemaService],
  exports:[TypeOrmModule]
})
export class ProducerModule {}
