import { Module } from '@nestjs/common';
import { LocalStrategy } from './passport.local.strategy';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { CONSTANTS } from './auth.constants';

@Module({
  imports: [
    
    JwtModule.register({
      global: true,
      secret: CONSTANTS.secret, //defined in auth.constant.ts
      signOptions: { expiresIn: '6900s' },
    }),
  ],
  controllers: [],
  providers: [LocalStrategy,UsersService,AuthService,JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
