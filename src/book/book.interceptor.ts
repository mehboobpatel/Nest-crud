import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

@Injectable()
export class BookInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        console.log('this is from BookInterceptor class');
        const ctx = context.switchToHttp()
        const request = ctx.getRequest<Request>()
        request.body.name = "changing response"
        request.body.age = 22
        return next.handle()
        
    }


}