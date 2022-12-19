import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalFilters(new HttpExceptionFilter());
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
    }),
  )

  const config = new DocumentBuilder()
  .setTitle('transactions')
  .setDescription('transactions description')
  .setVersion('1.0')
  .addTag('transactions')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document,{
    explorer:true,
    swaggerOptions:{
      filter:true,
      showRequestDuration:true,
    },
  });

  
  await app.listen(3003);
  console.log("corriendo en el puerto 3003");
}
bootstrap();
