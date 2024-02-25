import { Injectable } from '@nestjs/common';

@Injectable()
export class KitchenService {
  getHello(): string {
    return 'Hello World!';
  }
}
