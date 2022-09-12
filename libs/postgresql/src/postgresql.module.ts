import { Module } from '@nestjs/common';
import { PostgresqlService } from './postgresql.service';

@Module({
  
  providers: [PostgresqlService],
  exports: [PostgresqlService],
})
export class PostgresqlModule {}


