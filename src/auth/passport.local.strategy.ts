import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from 'passport-local'
import { Users } from "src/users/users.entity";
import { UsersService } from "src/users/users.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

    constructor(private readonly userService : UsersService){
        super()
    }

    validate(username: string,password : string): any
    {          
        console.log('Hello ')


        const user : Users = this.userService.getUserbyname(username,password)
        if(!user){
            console.log("User not found in strategy",username)
        }
        if(user == undefined) {
            throw new UnauthorizedException 

        }
        if(user.password == password) {
        console.log("password matched in stratgy as well here is the user object",user)
        return user;}
        else{
            console.log('Invalid password in strategey as well for user:', username);

        }


    }
}
