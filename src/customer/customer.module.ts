import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { ProductEntity } from './product.entity';
import { CustomerEntity } from './customer.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity, ProductEntity, OrderEntity])],
  controllers: [CustomerController],
  providers: [CustomerService]
})

export class CustomerModule{}

