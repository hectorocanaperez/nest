import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModuleProducer } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModuleProducer);

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist:true,
  //     forbidNonWhitelisted:true,
  //   }),
  // )
  const config = new DocumentBuilder()
  .setTitle('producers/events')
  .setDescription('producers description')
  .setVersion('1.0')
  .addTag('producers')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document,{
    explorer:true,
    swaggerOptions:{
      filter:true,
      showRequestDuration:true,
    },
  });
  await app.listen(3002);
  console.log("corriendo en el puerto 3002");
}
bootstrap();
