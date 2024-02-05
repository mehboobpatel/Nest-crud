// test.ts

import { BookService } from "src/book/book.service";
import { Book } from "src/book/data/book.dto";


const bookService = new BookService(); // Create an instance of BookService
const newBook: Book = { id: '1', title: 'Sample Book', author: 'John Doe', published: '2022-02-02' };
const result = bookService.addbook(newBook);
console.log(result); // Output: 'This book has been added successfully'
console.log(bookService.books); // Output: [{ id: '1', title: 'Sample Book', author: 'John Doe', published: '2022-02-02' }]
