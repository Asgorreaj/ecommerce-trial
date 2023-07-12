import { Module } from '@nestjs/common';
import { CustomerController } from './customer/customer.controller';
import { CustomerModule } from './customer/customer.module';
import { CustomerService } from './customer/customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CustomerModule,TypeOrmModule.forRoot(
   {
    type: 'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'root',
    database:'sneakers_club',
    autoLoadEntities:true,
    synchronize: true,
   }
  )],
  controllers: [ ],
  providers: [],
})
export class AppModule {}
