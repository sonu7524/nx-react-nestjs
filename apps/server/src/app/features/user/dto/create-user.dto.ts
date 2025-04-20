import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    confirmPassword: string;
    @IsString()
    phone: string;

    @IsString()
    address: string;
}
