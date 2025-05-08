import { Body, Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService){

  }

  @Get()
  create(@Body() params){
    return this.userService.createUser(params)
  }
}
