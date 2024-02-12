import { BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseFilters, UseGuards, ValidationPipe } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";
import { BookPipe } from "./pipes/pipes";
import { CustomException } from "./book.exception";
import { BookFilter } from "./book.filter";
import { error } from "console";
import { BookGuard } from "./book.guard";

@Controller("book")
export class BookController {

    constructor(private bookservice: BookService) {
        console.log('controller constr')
    }


    @Get("")
    hellobook(): string {

        throw new CustomException

        throw new BadRequestException

        //since the above code executes the below code wont be considered and vice versa
        return "Hello this is the first page without routes"
    }

    @Get("/custfiltexcept")
    @UseFilters(BookFilter)

    //to apply this to all the methods u can simply mention this 
    //@UseFilter below @controller
    custfiltexcept(): string {
        throw new BadRequestException

        }


    @Get("/definedincontr")
    definedincontr(): string {

        throw new BadRequestException( {
            status: 400,
            error: "this is defined in controller function",
            host: "localhost",
            anything: "asdf",
            numberany: 123
        })
    }

    @Get("/guard")
    @UseGuards(new BookGuard())
    //to apply this to all the methods u can simply mention this 
    //@UseGuard below @controller
    guard(){
        return "this  guard working"
    }



    @Get("/findall")
    getAllbooks(): Book[] {
        return this.bookservice.findallBook();
    }

    @Put("/update")
    updatebook(@Body() book: Book): string {
        return this.bookservice.updatebook(book);
    }

    @Delete("/delete/:id")
    deletebook(@Param("id") id: number): string {
        return this.bookservice.deletebook(id);
    }

    @Post('/add')
    addbook(@Body(new BookPipe()) book: Book): any {
        return this.bookservice.addbook(book)
    }


    @Post('/add2')
    addbook2(@Body(new ValidationPipe()) book: Book): any {
        return this.bookservice.addbook(book)
    }

    @Get('findbookbyid/:id')
    findbyid(@Param('id', ParseIntPipe) id: number): any {
        console.log(id, typeof(id));
        return this.bookservice.findbookbyid(id);
    }
}
