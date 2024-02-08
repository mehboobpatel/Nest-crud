import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomException extends HttpException{

    constructor(){
        super('this is my custom excp', HttpStatus.BAD_REQUEST)
    }

}