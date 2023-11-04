import { NestFactory } from '@nestjs/core';
import { ReservationModule } from './reservation.module';
import { Logger } from 'nestjs-pino'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  console.log('versys 900')
  const app = await NestFactory.create(ReservationModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true})) //will only allow values in the DTO
  app.useLogger(app.get(Logger))
  await app.listen(3000);
}
bootstrap();
