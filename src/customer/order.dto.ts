import { IsNotEmpty, IsString } from "class-validator";

export class orderDTO {
    orderID: number ;
    customerID: number ;


    @IsNotEmpty({ message:"Order Date Should Not be Empty"})
    @IsString({ message : "Order Date Name must bea string"})
    orderDate: string;
    
    
    @IsNotEmpty({ message:"Order status Should Not be Empty"})
    @IsString({ message : "Order status Name must bea string"})
    orderStatus: string;
    
    
    @IsNotEmpty({ message:"Product Should Not be Empty"})
    @IsString({ message : "Product Name must bea string"})
    product: string;
    
    
    @IsNotEmpty({ message:"Total Amount Should Not be Empty"})
    @IsString({ message : "Total Amount must be a string"})
    totalAmount: string;
    
    
    @IsNotEmpty({ message:"Shipping Address Should Not be Empty"})
    @IsString({ message : "Shipping Address must be a string"})
    shippingAddress: string;



}