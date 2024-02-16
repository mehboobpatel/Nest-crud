import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Users } from "src/users/users.entity";

@Injectable()
export class AuthService {
    constructor(private readonly jwtservice : JwtService){

    }
    //idCard
    generateToken(payload: Users): string{
        return this.jwtservice.sign(payload)
    }
}