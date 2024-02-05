class BookService {
    constructor() {
        // Initialize the books array

        //this means its making globally
        this.books = [
            { id: 1, title: 'Book 1' },
            { id: 2, title: 'Book 2' },
            { id: 3, title: 'Book 3' }
        ];
    }

    // Method to return the books array
    findAllBook() {
        return this.books;
    }
}

// Create an instance of BookService
const bookService = new BookService();

// Print the original array
console.log("Original Array:");
console.log(bookService.findAllBook());

const bookToUpdate = { id: 2, title: 'Updated Book' };

const index = bookService.books.findIndex((currentbook) => {
    return currentbook.id === bookToUpdate.id;
});

// Update the book if found
if (index !== -1) {
    bookService.books[index] = bookToUpdate;
    console.log("Book updated successfully.");
} else {
    console.log("Book not found.");
}

// Print the updated array
console.log("Updated Array:");
console.log(bookService.findAllBook());
