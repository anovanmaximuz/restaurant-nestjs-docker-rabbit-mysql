import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) {} 
  async sendUserConfirmation(email: string, name: string, foods: Array<string>) {
    
    await this.mailerService.sendMail({
      to: email,
      from: '"Foods UKI Team" <nonuser@kecipir.com>',
      cc: 'ano.amoeba@gmail.com', 
      subject: 'Your Order Here',
      template: './order',
      context: {
        name: name,
        food: foods,
      },
    });
  }
}
