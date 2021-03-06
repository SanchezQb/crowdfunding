import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsIn, IsPhoneNumber, Matches, MinLength } from 'class-validator';
import { UserRole } from "../user.role";

@InputType()
export class SignUpInput {
    @MinLength(3)
    @Field()
    firstName: string;

    @MinLength(3)
    @Field()
    lastName: string;

    @IsEmail()
    @Field()
    email: string;

    @IsPhoneNumber('NG')
    phoneNumber: string;

    @MinLength(6)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: "Password must have an uppercase letter, a lowercase letter and a number or symbol"
    })
    password: string;

    @Field()
    @IsIn([UserRole.ADMIN, UserRole.USER, UserRole.READ], { message: "Client App Not supported" })
    role: string;
}

@InputType()
export class LoginInput {

    @IsEmail()
    @Field()
    email: string;

    @MinLength(6)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: "Password must have an uppercase letter, a lowercase letter and a number or symbol"
    })
    password: string;

}