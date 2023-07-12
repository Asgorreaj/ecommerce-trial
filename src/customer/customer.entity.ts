import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";

@Entity("customer")
export class CustomerEntity {

    @PrimaryGeneratedColumn({ name: 'customer_id' })
    customerID: number;

    @Column({ name: 'first_name', type: 'varchar', length: 255,nullable: true  })
    firstName: string;

    @Column({ name: 'last_name', type: 'varchar', length: 255 ,nullable: true })
    lastName: string;

    @Column({ name: 'data_of_birth', type: 'varchar' ,nullable: true })
    dateofBirth: string;


    @Column({ name: 'address', type: 'varchar', length: 255,nullable: true  })
    address: string;

    @Column({ name: 'telephone_number', type: 'varchar', length: 255 ,nullable: true })
    telephoneNumber: string;

    @Column({ name: 'email', type: 'varchar', length: 255,nullable: true  })
    email: string;


    @Column({ name: 'password', type: 'varchar', length: 255 ,nullable: true })
    password: string;


    @Column({ name: 'profile_picture', type: 'varchar', length: 255,nullable: true  })
    profilePicture: string;



    @OneToMany(() => OrderEntity, order => order.customer, { onDelete: "SET NULL" })
    orders: OrderEntity[];



}


