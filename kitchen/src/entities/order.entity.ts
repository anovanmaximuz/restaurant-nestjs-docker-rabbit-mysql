import { Order } from '@prisma/client';

export class OrderEntity implements Order {
  id: number;
  order_id: number;
  user_id: number;
  food_id: number;
  state: string;
  created_at: Date;
  updated_at: Date;
}