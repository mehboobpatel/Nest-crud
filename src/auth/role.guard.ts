import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Request } from "express";
import { CONSTANTS } from './auth.constants';


export class RoleGuard implements CanActivate{

    private rolePassed : string;

    constructor(role: string) {
        this.rolePassed = role
    }

    canActivate(context: ExecutionContext) : any{
        
        const ctx = context.switchToHttp()
        const request : any = ctx.getRequest<Request>()
        console.log(request.method,request.originalUrl)
        
        return this.rolePassed === request.user.role //you can return anything string aswell 
    }
}