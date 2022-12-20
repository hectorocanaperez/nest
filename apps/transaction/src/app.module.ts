/* eslint-disable prettier/prettier */
import {ConfigModule} from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from './transaction/transaction.module';




@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    host:process.env.DATABASE_HOST,
    database:process.env.DATABASE_NAME,
    username:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
  // port:process.env.DATABASE_PORT,
    autoLoadEntities: true,
    type: 'postgres',
     port: 5433,
    synchronize: true,
    retryDelay: 3000,
    retryAttempts: 10,
  }),
    
     TransactionsModule,
     
    ],
  controllers: [AppController],
  providers: [AppService],
  exports:[TypeOrmModule],
})
export class AppModule {}
