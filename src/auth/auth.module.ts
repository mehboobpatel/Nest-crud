import { Module } from '@nestjs/common';
import { LocalStrategy } from './passport.local.strategy';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [],
  controllers: [],
  providers: [LocalStrategy,UsersService],
  exports: []
})
export class AuthModule {}
