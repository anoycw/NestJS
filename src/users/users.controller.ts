import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './Entities/User';
// import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
// <User
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

//   @Get(':id')
//   findOne(@Param('id') id: string): Promise<User> {
//     return this.usersService.findOne(Number(id));
//   }

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() user: User): Promise<User> {
//     return this.usersService.update(Number(id), user);
//   }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(Number(id));
  }
}
