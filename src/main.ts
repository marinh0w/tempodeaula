import { NestFactory } from '@nestjs/core';
import { RenderModule } from 'nest-next';
import * as Next from 'next';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = Next({
    dev: process.env.NODE_ENV !== 'production',
  });

  await app.prepare();

  const server = await NestFactory.create(AppModule);

  const renderer = server.get(RenderModule);
  renderer.register(server, app);

  await server.listen(process.env.PORT || 3000);
}
bootstrap();

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();
