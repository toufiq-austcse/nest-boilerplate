import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
import { HttpExceptionFilter } from '@common/filters/http-exception.filter';



async function setupSwagger(app, port: number) {

  let swaggerDocPath = '/api-doc';
  let { SWAGGER_USERNAME, SWAGGER_PASSWORD } = process.env;

  const config = new DocumentBuilder()
    .setTitle('Nest Boilerplate')
    .setDescription('Nest Boilerplate API DOC')
    .setVersion('1.0')
    .addApiKey(
      { type: 'apiKey', name: 'Authorization', in: 'header', scheme: 'bearer', bearerFormat: 'Bearer' },
      'auth'
    )
    .addApiKey({
      type: 'apiKey', name: 'Authorization', in: 'header', scheme: 'bearer', bearerFormat: 'Bearer'
    }, 'studio-server-auth')
    .addServer(`http://localhost:${port}/`, 'localhost')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  app.use(
    [swaggerDocPath, swaggerDocPath + '-json'],
    basicAuth({
      challenge: true,
      users: { [SWAGGER_USERNAME]: SWAGGER_PASSWORD }
    })
  );

  SwaggerModule.setup(swaggerDocPath, app, document, {
    swaggerOptions: { persistAuthorization: true, ignoreGlobalPrefix: true }
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let PORT = +process.env.PORT || 3000;
  await setupSwagger(app, PORT);
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
      // transformOptions: {
      //   enableImplicitConversion: true,
      // },
    })
  );
  await app.listen(PORT);
  Logger.log(await app.getUrl(), 'App URL');
}

bootstrap();
