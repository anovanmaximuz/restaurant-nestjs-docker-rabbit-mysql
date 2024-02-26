// src/order/dto/create-order.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCheckoutDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  order_id: number;
}
