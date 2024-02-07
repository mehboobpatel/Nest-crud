import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";
import { BookPipe } from "./pipes/pipes";

@Controller("book")
export class BookController {

    constructor(private bookservice: BookService) {
        console.log('controller constr')
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

    @Get('findbookbyid/:id')
    findbyid(@Param('id', ParseIntPipe) id: number): any {
        console.log(id, typeof(id));
        return this.bookservice.findbookbyid(id);
    }
}
