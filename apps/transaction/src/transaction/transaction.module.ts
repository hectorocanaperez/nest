import { Logger, Module } from '@nestjs/common';
import { TransactionsController } from './transaction.controller';
import { Transaction } from './transaction.entity';
import { TransactionsService } from './transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApicurioSchemaService } from '../../../../apicurioSchema/apicurio.service';
import { ApicurioModule } from '../../../../apicurioSchema/apicurio.module';
import { APP_FILTER } from '@nestjs/core';

//import { PostgresqlModule } from '@app/postgresql';

@Module({
  imports: [ ApicurioModule,
    TypeOrmModule.forFeature([Transaction])],
    

  controllers: [TransactionsController],
  providers: [
  //    {
  //   provide: APP_FILTER,
  //   useClass: HttpExceptionFilter,
  // },
  TransactionsService,ApicurioSchemaService,Logger],
  //exports: [ConfigService],
})

export class TransactionsModule {}



