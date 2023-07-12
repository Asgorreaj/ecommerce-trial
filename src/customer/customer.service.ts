import { Controller, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from './customer.entity';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { OrderEntity } from './order.entity';
import * as bcrypt from 'bcrypt';
import { CustomerDTO, userDTO } from './customer.dto';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepository: Repository<CustomerEntity>,
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>,
        @InjectRepository(OrderEntity)
        private orderRepository: Repository<OrderEntity>
    ) { }


    //registration

    async registerCustomer(customer: CustomerDTO): Promise<CustomerEntity> {
        const salt = 25 ;            
        return await this.customerRepository.save(customer);


    }

    // Log in
    async login(query: userDTO) {
        const email = query.email;
        const password = query.password;
        const customerDetails = await this.customerRepository.findOneBy({ email: email });
        /*if (customerDetails === null) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                message: "customer not found"
            })
        } else {
            if (password === customerDetails.password) {
                return customerDetails;
            } else {
                throw new UnauthorizedException({
                    status: HttpStatus.UNAUTHORIZED,
                    message: "Password does not match"
                })
            }
        }*/
        console.log(customerDetails);
        return customerDetails;
    }


}
