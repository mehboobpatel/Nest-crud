import { Controller,Get,Post,Body,Patch,Param,Delete,UseGuards,Request,} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Users } from './users/users.entity';
import { AuthService } from './auth/auth.service';
import { request, response } from 'express';
import { JwtStrategy } from './auth/jwt.strategy';
import { RoleGuard } from './auth/role.guard';
import { CONSTANTS } from './auth/auth.constants';

@Controller('app')
export class AppController {
  constructor(private authservice: AuthService) { }

  @Get('hello')
  @UseGuards(AuthGuard('local'))
  //the below method is getting the user object via local from the above method
  gethello(@Request() req): any {
    const token = this.authservice.generateToken(req.user);
    console.log(token);
    return req.user;
  }

  @Get('androiddev')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER)) //it will call jwt.strategy.ts
  androiddev(@Request() req): string {
    console.log(
      'Android : app controller get verified via JWT token', req.user,
    );
    return 'this is Android Dev ' + JSON.stringify(req.user);
  }
  @Get('webdev')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER)) //it will call jwt.strategy.ts
  webdev(@Request() req) {
    console.log('WEB : app controller get verified via JWT token', req.user);
    return ' this is for Web developer' + JSON.stringify(req.user);
  }
}
