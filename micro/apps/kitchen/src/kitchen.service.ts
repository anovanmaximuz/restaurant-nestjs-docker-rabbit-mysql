import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class KitchenService {
  constructor(private prisma: PrismaService) {}
  getHello(): string {
    console.log("ini di akses set data jadi processed")
    return 'Hello World!';
  }

  async processOrder(order_id: number) {
    let process = await this.prisma.order.updateMany({where: { order_id },data: {state: "processed"}});
    if(process.count >0){
      Logger.log('Success process an order','Order update');
    }else{
      Logger.log('Failed process an order','Order update');
    }    
  }
}
