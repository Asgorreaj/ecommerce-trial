import { Controller, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from './customer.entity';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { OrderEntity } from './order.entity';
import { genSalt, hash, compare } from 'bcrypt';
import { CustomerDTO, userDTO } from './customer.dto';

@Injectable()
export class CustomerService {
    login(query: userDTO) {
        throw new Error('Method not implemented.');
    }
    registerCustomer(customer: CustomerDTO) {
        throw new Error('Method not implemented.');
    }
}
 
@Controller('customer')
export class CustomerController {
    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepository: Repository<CustomerEntity>,
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>,
        @InjectRepository(OrderEntity)
        private orderRepository: Repository<OrderEntity>
    ) {}

    //registration

    async registerCustomer(customer: CustomerDTO): Promise<CustomerEntity> {
        const salt = await genSalt();
        customer.password = await hash(customer.password, salt);
        return await this.customerRepository.save(customer);


    }

        // Log in
        async login(query:userDTO)
        {
            const email = query.email;
            const password = query.password;
            const customerDetails = await this.customerRepository.findOneBy({ email : email });        
            if (customerDetails === null) {
                throw new NotFoundException({
                    status: HttpStatus.NOT_FOUND,
                    message: "customer not found"
                })
            } else {
                if (await compare(password, customerDetails.password)) {
                    return customerDetails;
                } else {
                    throw new UnauthorizedException({
                        status: HttpStatus.UNAUTHORIZED,
                        message: "Password does not match"
                    })
                }
            }
        }
    
    
}
