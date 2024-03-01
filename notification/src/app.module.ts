import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RabbitMQSubscriber } from './rabbit.subscriber';
import { PrismaService } from './prisma/prisma.service';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [PrismaModule, MailModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, RabbitMQSubscriber, PrismaService],
  
})
export class AppModule {} 