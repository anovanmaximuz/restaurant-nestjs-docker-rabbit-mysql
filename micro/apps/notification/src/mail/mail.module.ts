import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';

@Global() // 👈 optional to make module global
@Module({
  imports: [
    MailerModule.forRootAsync({
      //imports: [ConfigModule], // import module if not enabled globally
      useFactory: async () => ({
        transport: {
          host: "srv76.niagahoster.com" ,
          port: 465,
          secure: true,
          auth: {
            user: "nonuser@kecipir.com",
            pass: "8*Jk43ZI0]mk",
          },
        },
        defaults: {
          from: `"No Reply" <nonuser@kecipir.com>`,
        },
        template: {
          dir: process.cwd() + '/apps/notification/templates/',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}