import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class RabbitMQSubscriber implements OnModuleInit {
    constructor(private appService:AppService, private prismaService:PrismaService) {}
    private readonly url = 'amqp://localhost';
    
    async onModuleInit(): Promise<void> {
    const connection = await amqp.connect(this.url);
    const channel = await connection.createChannel();
    const exchange = 'orders';
    await channel.assertExchange(exchange, 'direct', { durable: false });
    
    const queue = await channel.assertQueue('', { exclusive: true });
    
    const routingKey = 'order_notification';
    await channel.bindQueue(queue.queue, exchange, routingKey);
    
    // Consume messages from the queue
    channel.consume(
      queue.queue,
      (msg) => {
        if (msg) {
          const message = msg.content.toString();
          const myData = message.split("|");          
          this.sendEmail(myData[1],myData[2],myData[0]);
          Logger.log(`Notification prepare send confirmation to ${message}`,'Rabbit MQ');
        }
      },
      { noAck: true },
    );
  }

  
  async sendEmail(name: string, email: string, order_id: number) {        
    const result: Array<any> = await this.prismaService.$queryRaw`select  b.\`name\` from \`Order\` a LEFT JOIN Food b ON b.id=a.food_id  where a.order_id= ${order_id};`;  
    let foods = [];
    if(result.length > 0){
      result.forEach(function(items, index) {
        foods.push((index+1)+". "+items.name);
      });
    }  

    await this.appService.sendUserConfirmation(email, name, foods);    
  }
}