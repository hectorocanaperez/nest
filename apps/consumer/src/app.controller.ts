import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {PostgresqlService} from '../../../libs/postgresql/src/postgresql.service'

//esta es la app principal
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


}
