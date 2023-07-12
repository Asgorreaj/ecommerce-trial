import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";

@Entity("customer")
export class CustomerEntity {

    @PrimaryGeneratedColumn({ name: 'customer_id' })
    customerID: number;

    @Column({ name: 'first_name', type: 'varchar', length: 255 })
    firstName: string;

    @Column({ name: 'last_name', type: 'varchar', length: 255 })
    lastName: string;

    @Column({ name: 'data_of_birth', type: 'date' })
    dataofBirth: string;


    @Column({ name: 'address', type: 'varchar', length: 255 })
    address: string;

    @Column({ name: 'telephone_number', type: 'varchar', length: 255 })
    telephonenumber: number;

    @Column({ name: 'email', type: 'varchar', length: 255 })
    email: string;


    @Column({ name: 'password', type: 'varchar', length: 255 })
    password: string;


    @Column({ name: 'profile_picture', type: 'varchar', length: 255 })
    profilePicture: string;



    @OneToMany(() => OrderEntity, order => order.customer)
    orders: OrderEntity[];



}


