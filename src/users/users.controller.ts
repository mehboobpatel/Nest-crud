import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { request } from 'express';

@Controller('users')
export class UsersController {
  constructor() {
  }

  @Get('hello')
  @UseGuards(AuthGuard('local'))
  gethello(@Request() dfd) : string{

    return JSON.stringify(dfd.user) + "asdf" ; // this return will give you respone in browser
      // and you can t use request.user + "asdf"
      // you can use JSON.stringfy(request.user) + "asdf"
  }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
