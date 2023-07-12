import { IsNotEmpty, IsString } from "class-validator";


export class productDTO{


    @IsNotEmpty({message: "Product Should Not be empty"})
    @IsString({message : "Product Name must be a string"})
    productName: string;


    @IsNotEmpty({message: "Product Should Not be empty"})
    @IsString({message : "Product Name must be a string"})
    price: string;


    @IsNotEmpty({message: "description Should Not be empty"})
    @IsString({message : "description Name must be a string"})
    description: string;
    
    
    @IsNotEmpty({message: "product Should Not be empty"})
    @IsString({message : "product Name must be a string"})
    category: string;
    
    
    @IsNotEmpty({message: "product Should Not be empty"})
    @IsString({message : "product Name must be a string"})
    tags: string;
    
    
    @IsNotEmpty({message: "product Should Not be empty"})
    @IsString({message : "product Name must be a string"})
    availability: string;
    
    
    @IsNotEmpty({message: "Review Should Not be empty"})
    @IsString({message : "Review Name must be a string"})
    review: string;
    
    
    @IsNotEmpty({message: "supplier Should Not be empty"})
    @IsString({message : "supplier Name must be a string"})
    supplier: string;

    picture:string;
}
export class editproductDTO{
    editProduct: number ;
}