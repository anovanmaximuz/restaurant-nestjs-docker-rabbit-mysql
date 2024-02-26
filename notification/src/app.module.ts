import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerModule } from '@nestjs-modules/mailer';
import { PrismaModule } from './prisma/prisma.module';
import { RabbitMQSubscriber } from './rabbit.subscriber';
import { PrismaService } from './prisma/prisma.service';
import { MailModule } from './mail/mail.module';

@Global()
@Module({
  imports: [PrismaModule, MailModule],
  controllers: [AppController],
  providers: [AppService, RabbitMQSubscriber, PrismaService],
  
})
export class AppModule {} 