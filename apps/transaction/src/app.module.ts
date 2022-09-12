/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { PostgresqlModule } from '@app/postgresql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from 'apps/transaction/src/transaction/transaction.module';
import { PostgresqlModule } from '@app/postgresql';
import { ProducerService } from 'apps/producer/src/producer/producer.service';

@Module({
  imports: [TypeOrmModule.forRoot({
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
  }),
    
     TransactionsModule,
     PostgresqlModule
    ],
  controllers: [AppController],
  providers: [AppService],
  exports:[TypeOrmModule],
})
export class AppModule {}
