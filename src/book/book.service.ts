
import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto"
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class BookService{


//so here we are declaring a variable books and assigning it a type of Book and than array and than intializing it with no values
// if we wanted books to be of string type it would be books : string[] : [1,"123","adsf"]
public books : Book[] = [];

constructor(){
    console.log("service.ts constr")
}

addbook(book : Book) : string {
    // book.id = uuidv4();
    this.books.push(book);
    return ' this book has been pushed succsfly';
}

updatebook(book: Book): string {
    let index = this.books.findIndex((currentbook)=> {
        //you can use any name inplace of index 
        // currentbook is implctly defined by TS (autmtcly assigned and declared for looping)
        return currentbook.id == book.id;
    });
    this.books[index] = book;
    return " Book has been succesfully updated";

}

// deletebook
deletebook(bookId : number): string {
 this.books = this.books.filter((rdbookobjcts)=>{
    return rdbookobjcts.id !== bookId;
 });
 return "Book has been deleted";
}

//findallbook
findallBook() : Book[] {
    return this.books;
}

//findallbook
findbookbyid(id: number) : Book{
    console.log("Finding Book")
    const matchedbook = this.books.find(book => book.id === id);
    console.log(matchedbook)
    return matchedbook;
}

}