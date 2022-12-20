import { Logger, Module } from '@nestjs/common';
import { TransactionsController } from './transaction.controller';
import { Transaction } from './transaction.entity';
import { TransactionsService } from './transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApicurioSchemaService } from '../../../../apicurioSchema/apicurio.service';
import { ApicurioModule } from '../../../../apicurioSchema/apicurio.module';


@Module({
  imports: [ ApicurioModule,
    TypeOrmModule.forFeature([Transaction])],
    

  controllers: [TransactionsController],
  providers: [
  TransactionsService,ApicurioSchemaService,Logger],
  
})

export class TransactionsModule {}



