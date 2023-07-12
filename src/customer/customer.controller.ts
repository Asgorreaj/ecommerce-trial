import { Controller, Post, ValidationPipe, UsePipes, UploadedFile, Body, UseInterceptors, HttpStatus, ForbiddenException, Session, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CustomerDTO, userDTO } from './customer.dto';
import { MulterError, diskStorage } from 'multer';
import { SessionGuard } from "./session.gaurd";


@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    //registration
    @Post('/registration')
    @UsePipes(new ValidationPipe)
    @UseInterceptors(FileInterceptor('profilePicture',
        {
            fileFilter(req, file, callback) {
                if (file.originalname.match(/^.*\.(jpg|wedp|png|jpeg)$/)) {
                    callback(null, true);
                } else {
                    callback(new MulterError('LIMIT_UNEXPECTED_FILE', 'IMAGE'), false)
                }
            }, limits: { fileSize: 1000000 },
            storage: diskStorage({
                destination: './profile_Picture',
                filename(req, file, callback) {
                    callback(null, Date.now() + file.originalname)
                },
            })
        }))
    async registerCustomer(
        @Session() session,
        @Body() customer: CustomerDTO,
        @UploadedFile() profilePicture: Express.Multer.File
    ) {
        customer.profilePicture = profilePicture.filename;

        if (customer.password !== customer.confirmPassword) {
            throw new ForbiddenException({
                status: HttpStatus.FORBIDDEN,
                message: "Password and Confirm Password Do Not match.",
            });
        }

        const customerDetails = await this.customerService.registerCustomer(customer);

        session.customerID = customerDetails.customerID;
        session.email = customerDetails.email;
        session.profilePicture = customerDetails.profilePicture;

        return "Registration successful";
    }


    //Log in
    @Post('/login')
    async login(@Query() query: userDTO, @Session() session) {
        const customerDetails = await this.customerService.login(query);
        session.customerID = customerDetails.customerID;
        session.email = customerDetails.email;
        session.profilePicture = customerDetails.profilePicture;
        return "Login successfull";
    }


























}
