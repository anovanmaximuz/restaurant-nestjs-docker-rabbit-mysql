import { Injectable } from '@nestjs/common';

@Injectable()
export class RabbitService {
  getHello(): string {
    return 'Hello World!';
  }
}
