import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(email: string, name: string, foods: Array<string>) {
    
    await this.mailerService.sendMail({
      to: email,
      from: '"Foods Restaurant Team" <nonuser@domain.com>',
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
