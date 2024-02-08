import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express"; // Import Request and Response from express

@Catch(HttpException)
export class BookFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        
        const context = host.switchToHttp();
        const response = context.getResponse<Response>(); // Use lowercase 'response'
        const request = context.getRequest<Request>(); // Use lowercase 'request'
        const status = exception.getStatus();

        response.status(status).json({ // Use parentheses for the object passed to json
            statusCode: status,
            timeStamp: new Date().toISOString(),
            url: request.url,
            host: request.get("host")
        });
    }
}
