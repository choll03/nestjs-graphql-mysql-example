import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';


@Resolver('User')
export class UserResolver {

    constructor(
        private userService: UserService,
    ){}

    @Query()
    userList(){
        return this.userService.getAllUser();
    }
}
