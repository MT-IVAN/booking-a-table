import { Module } from '@nestjs/common';
import { LoggerModule as PinoLolgerModule } from 'nestjs-pino';
@Module({
    imports: [PinoLolgerModule.forRoot({
        pinoHttp: {
          transport: {
            target: 'pino-pretty',
            options: {
              singleLine: true
            }
          }
        }
      })]
})
export class LoggerModule {}
