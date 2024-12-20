import { Body, Controller,Delete,Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from './interface/user';
@Controller('users')
export class UserController {
    constructor(private readonly userservice :UserService ){

    }
    // HTTP GET /users
    @Get()
    getUsers(): user[]{
        return this.userservice.getUsers();
    }
    // HTTP POST /users
    @Post()
    postUser(@Body() user:user):user{
        console.log("🚀 ~ UserController ~ postUser ~ user:", user)
        return this.userservice.addUser(user)
    }
    // HTTP DELETE /users
    @Delete("/:email")
    deleteUser(@Param('email') email:string):user[]{
        return this.userservice.deleteUser(email)
    }
}