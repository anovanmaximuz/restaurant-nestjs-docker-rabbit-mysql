import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}


  create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({ data: createOrderDto });
  }

  findAll() {
    return this.prisma.food.findMany({ select: {name: true, price: true}});
  }

  findFood(food_id: number) {
    return this.prisma.food.count({ where: { id: food_id} });
  }

  getFood(food_id: number) {
    return this.prisma.food.findUnique({ where: { id: food_id} });
  }

  findOrder(order_id: number) {
    return this.prisma.order.findFirst({ where: { order_id}, select: {state: true}});
  }

  findAllOrder(order_id: number) {
    return this.prisma.order.findMany({ where: { order_id}});
  }

  hasPendingOrder(order_id: number) {
    return this.prisma.order.count({ where: { order_id, state: "pending"} });  
  }

  getPendingOrder(order_id: number) {
    return this.prisma.order.findFirst({ where: { order_id, state: "pending"} });  
  }

  hasFinishOrder(order_id: number) {
    return this.prisma.order.count({ where: { order_id, state: "processed" } });
  }

  getFinishOrder(order_id: number) {
    return this.prisma.order.findMany({ where: { order_id, state: "processed" } });
  }

  findOrderStatus(order_id: number) {
    return this.prisma.order.findFirst({ where: { order_id }, select: {state: true} });
  }

  findOne(id: number) { 
    return this.prisma.order.findUnique({ where: { id } });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({
      where: { id },
      data: updateOrderDto,
    });
  }

  remove(order_id: number) {
    return this.prisma.order.deleteMany({ where: { order_id, state: "pending" } });
  }
}
