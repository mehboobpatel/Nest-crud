
// Define an array of books
let books = [
    { id: "1", title: "Book 1" },
    { id: "2", title: "Book 2" },
    { id: "3", title: "Book 3" }
];

// Function to delete a book by bookId
function deleteBook(booksArray, bookId) {
    // Filter the books array to remove the book with the specified bookId
    books = booksArray.filter((book) => {
        return book.id !== bookId;
    });

    
    // Return a message indicating that the book has been deleted
    return "Book has been deleted";
}

// Print the original array
console.log("Original Array:");
console.log(books);

// Call the deleteBook function to delete a book with bookId "2"
console.log(deleteBook(books, "3"));

// Print the updated array after deleting the book
console.log("Updated Array:");
console.log(books);

