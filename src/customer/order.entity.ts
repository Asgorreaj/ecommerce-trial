import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { CustomerEntity } from "./customer.entity";


@Entity("order")
export class OrderEntity{

    @PrimaryGeneratedColumn({name: 'order_id'})
    orderID:number;

    @Column({name: 'customer_id'})
    customerID:number;


    @Column({name:'date', type:'varchar', length:255})
    orderdate: Date;


    @Column({name:'order_status', type:'varchar', length:255})
    orderStatus: string;
    


    @Column({name:'product', type:'varchar', length:255})
    products: string;


    @Column({name:'total_amount', type:'varchar', length:255})
    totalAmount: string;


    @Column({name:'shipping_address', type:'varchar', length:255})
    shippingAddress: string;


    @ManyToOne(()=> CustomerEntity, customer  => customer.orders)
    customer: CustomerEntity;

}