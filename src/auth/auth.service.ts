import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { LoginInput, SignUpInput } from './input/user.input';
import { User } from './schemas/user.schema';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private jwtService: JwtService,
    ) { }

    async signup(signUpInput: SignUpInput) {

    }

    async login(loginInput: LoginInput) {
        const { email, password } = loginInput;
        const user = await this.userModel.findOne({ email })
        if (!user) {
            throw new UnauthorizedException("Incorrect Email/Password")
        }
        const isValid = await bcrypt.compare(password, user.password).then(function (result) {
            return result;
        });
        if (!isValid) {
            throw new UnauthorizedException("Incorrect Email/Password")
        }

    }
    async getUser(id: string) {
        const found = await this.userModel.findById(id)
        if (!found) {
            throw new NotFoundException()
        }
        return found;
    }
    async getUsers() {
        return this.userModel.find()
    }
}
