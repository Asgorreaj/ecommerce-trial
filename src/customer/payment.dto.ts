import { IsNotEmpty, IsString } from "class-validator";


export class paymentInformationDTO{
    paymentID: number;
    orderID: number;
    
    
    @IsNotEmpty({ message : "Amount Should not be Empty "})
    @IsString({ message:" Amount name must be a string" })
    amount:string;
    
    
    @IsNotEmpty({ message : "currency Should not be Empty "})
    @IsString({ message:" currency name must be a string" })
    currency:string;
    
    
    @IsNotEmpty({ message : "Payment Method Should not be Empty "})
    @IsString({ message:" Payment Method name must be a string" })
    paymentMethod:string;
    
    
    @IsNotEmpty({ message : "Payment Date Should not be Empty "})
    @IsString({ message:" Payment Date name must be a string" })
    paymentDate:string;

}
    export class confirmOrderDTO {

    orderID: number;
    currency: string;
    paymentMethod:string;

    }
