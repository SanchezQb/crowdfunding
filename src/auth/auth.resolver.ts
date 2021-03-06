import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput, SignUpInput } from './input/user.input';
import { UserType } from './user.type';

@Resolver(() => UserType)
export class AuthResolver {

    constructor(private authService: AuthService) { }


    @Query(() => [UserType])
    async users() {
        return this.authService.getUsers();
    }

    @Query(() => UserType)
    async user(
        @Args('id') id: string,
    ) {
        return this.authService.getUser(id);
    }


    @Mutation(() => UserType)
    async signup(
        @Args('signUpInput') signUpInput: SignUpInput,
    ) {
        return this.authService.signup(signUpInput);
    }


    @Mutation(() => UserType)
    async login(
        @Args('loginInput') loginInput: LoginInput,
    ) {
        return this.authService.login(loginInput);
    }


}

