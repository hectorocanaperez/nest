/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumerModule } from './consumer/consumer.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
      host:process.env.DATABASE_HOST,
      database:process.env.DATABASE_NAME,
      username:process.env.DATABASE_USER,
      password:process.env.DATABASE_PASSWORD,
      autoLoadEntities: true,
      type: 'postgres',
      port: 5433,
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10,
  }),
    ScheduleModule.forRoot(),
     ConsumerModule,
     
    ],
  controllers: [AppController],
  providers: [AppService],
  exports:[TypeOrmModule],
})
export class AppModule {}
