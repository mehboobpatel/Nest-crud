import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Users } from './users/users.entity';

@Controller('app')
export class AppController {
  constructor() {
  }

  @Get('hello')
  @UseGuards(AuthGuard('local'))
  gethello() : any{

    return   " this is from App controller"
  }}