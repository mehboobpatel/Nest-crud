import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

@Injectable()
export class BookGuard implements CanActivate{

    // after boolean you can also use for additional funcitons --.
    //| Promise<boolean> | Observable<boolean> 
    public key = "asdfghjkl"
    //below ExecutionContext == Argumnetshost just like in exception there was host
    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp()
        const request = ctx.getRequest<Request>()
        const a = request.header("key")

        console.log(a)
        console.log(this.key)

        if (a === undefined || a !== this.key) {
            console.log("Authentication failed");
            return false;
        } else if (a === this.key) {
            console.log("Authentication passed");
            return true;
        }

            //if no condition is met -> this will xcute
        console.log("defined in guard.ts")
        return true
    }
    
}