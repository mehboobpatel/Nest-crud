import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express"; // Import Request and Response from express

@Catch(HttpException)
export class BookFilter implements ExceptionFilter {

    //below it was host : ArgumnetHost but just to explain its not a keyword
    // you can use anything similryl with exception
    catch(dexception: HttpException, dost: ArgumentsHost) {
        //host is an instance of ArgumntHost
        
        const context = dost.switchToHttp();
        //switchtoHttp lets u access the http reqs and respon object
        //switchtoHtpp is basically switching the default context of the request to http request context
        //its taking the host from the first line in parametrhost: ArgumentsHost
        const response = context.getResponse<Response>(); // Use lowercase 'response'
        const request = context.getRequest<Request>(); // Use lowercase 'request'
        const status = dexception.getStatus();

        response.status(status).json({ // Use parentheses for the object passed to json
            statusCode: status,
            timeStamp: new Date().toISOString(),
            url: request.url,
            host: request.get("host")
        });
    }
}
