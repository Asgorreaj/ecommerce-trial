import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsUrl, Length, Matches, MaxLength, matches, IsDate } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CustomerDTO {




    @IsNotEmpty({ message: " First name should not be empty " })
    @IsString({ message: "First Name must be String" })
    @Matches(/^[A-Za-z.]+$/, { message: " First name must contain letters only " })
    firstName: string;



    @IsNotEmpty({ message: " Last name should Not be empty " })
    @IsString({ message: "Last Name must be String" })
    @Matches(/^[A-Za-z.]+$/, { message: " Last name must contain letters only " })
    lastName: string;


    @IsNotEmpty({ message: 'Date of birth should not be empty' })
    dateofBirth: string;

    @IsNotEmpty({ message: "address  should not be empty " })
    @IsString({ message: " must be String" })
    address: string;

    @IsNotEmpty({ message: "telephone should not be empty " })
    @IsString({ message: "telephone must be String" })
    @MaxLength(11)
    @IsPhoneNumber('BD')
    telephoneNumber: string;

    @IsNotEmpty({ message: "Email  should not be empty " })
    @IsEmail({})
    email: string;


    @IsNotEmpty({ message: "Password  should not be empty " })
    @Length(8, 20, { message: 'Password should be between 8 and 20 characters' })
    password: string;


    @IsNotEmpty({ message: "Confirm-Password  should not be empty " })
    @Length(8, 20, { message: 'Password should be between 8 and 20 characters' })
    confirmPassword: string;

    profilePicture: string;

}

export class EditCustomerDTO {
    editKey: string;
    editValue: string;
}

export class userDTO {
    email: string;
    password: string;
}














