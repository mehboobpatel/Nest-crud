
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { CONSTANTS } from './auth.constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: CONSTANTS.secret //defined in auth.constant.ts
    });
  }

  async validate(payload: any) {
    console.log("payload",payload) //payload is basiclly request object
    return payload //we use return to make sure the funciton got executed
    //note if you want     return "this is Android Dev " + JSON.stringify(req.user)
    //to ro return the response on browser of the request object(payload) , we should type return payload

  }
}
