import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  const config = new DocumentBuilder()
    .setTitle('peer2peer test')
    .setVersion('1.0')
    .addTag('test')
    .build();


  const document = SwaggerModule.createDocument(app, config);

  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Peer2Peer Payment test',
  };

  SwaggerModule.setup('test', app, document, customOptions);
 
  await app.listen( process.env.PORT || 3000);

  console.log(`server running on ${await app.getUrl()} : ` + new Date());
}
bootstrap();
