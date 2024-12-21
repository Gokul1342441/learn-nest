import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { user } from './interface/user';
import { UserDto, userParamsDto } from './dto/user.dto';
@Controller('users')
export class UserController {
  constructor(private readonly userservice: UserService) {}
  // HTTP GET /users
  @Get()
  getUsers(): user[] {
    return this.userservice.getUsers();
  }
  @Get('/:email')
  getUser(@Param() param: userParamsDto): user {
    return this.userservice.getUser(param.email);
  }
  // HTTP POST /users
  @Post()
  @UsePipes(new ValidationPipe())
  postUser(@Body() user: UserDto): user {
    return this.userservice.addUser(user);
  }
  // HTTP DELETE /users
  @Delete('/:email')
  deleteUser(@Param() params: userParamsDto): user[] {
    return this.userservice.deleteUser(params.email);
  }
}
