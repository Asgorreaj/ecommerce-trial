import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("product")
export class ProductEntity {

    @PrimaryGeneratedColumn({ name: 'product_id' })
    prodductID: number;

    @Column({ name: 'product_name', type: 'varchar', length: 255 })
    productName: string;

    @Column({ name: 'price', type: 'varchar', length: 255 })
    price: string;

    @Column({ name: 'description', type: 'varchar', length: 255 })
    description: string;

    @Column({ name: 'category', type: 'varchar', length: 255 })
    category: string;

    @Column({ name: 'tags', type: 'varchar', length: 255 })
    tags: string;

    @Column({ name: 'availablity', type: 'varchar', length: 255 })
    avalabilty: string;

    @Column({ name: 'rating', type: 'varchar', length: 255 })
    rating: string;

    @Column({ name: 'reviews', type: 'varchar', length: 255 })
    reviews: string;

    @Column({ name: 'supplier', type: 'varchar', length: 255 })
    supplier: string;

    @Column({ name: 'picture', type: 'varchar', length: 255 })
    picture: string;




}