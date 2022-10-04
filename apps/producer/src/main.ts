import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { ProducerModule } from './producer/producer.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist:true,
  //     forbidNonWhitelisted:true,
  //   }),
  // )
  await app.listen(3002);
  console.log("corriendo en el puerto 3002");
}
bootstrap();
