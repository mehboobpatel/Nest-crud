import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction , Request, Response} from "express";

@Injectable()
export class BookMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        // let protocol = req.protocol;
        // let host = req.get('host')
        // let url = req.originalUrl
        // let method = req.method
        // let date = new Date().toDateString()

console.log("this is class based middleware for BookModule")   
console.log(req.protocol + "://" +req.get('host') + req.originalUrl + " " + req.method + " " + Date())   
next()
 }

}