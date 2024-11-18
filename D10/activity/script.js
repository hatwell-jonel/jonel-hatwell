class Book {
    constructor(title, author, genre, availability = true) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.availability = availability;
    }

    borrowBook() {
        if (this.availability) {
          this.availability = false;
          console.log(`%c${this.title} is available.`,
            "color: green;"
          );
        } else {
          console.log(`%c${this.title} is currently unavailable.`, "color: red;");
        }
    }

    returnBook() {
        if (!this.availability) {
          this.availability = true;
          console.log(`%c${this.title} is successfully returned.`, "color: green");
        } else {
          console.log(`%c${this.title} was not borrowed.`, "color: red");
        }
    }

    displayInfo() {

        // %c is used to apply the style to the text that follows it in the log.
        console.log(
            `
            %cTitle: %c${this.title}\n
            %cAuthor: %c${this.author}\n
            %cGenre: %c${this.genre}\n
            %cAvailability: %c${this.availability ? "Available" : "Unavailable"}`,
            "color: orange; font-weight: bold;","color: white;", // title
            "color: orange; font-weight: bold;","color: white;", // author
            "color: orange; font-weight: bold;","color: white;", // genre
            "color: orange; font-weight: bold;", `color: white};` // availability
        );


        
        // console.log(`Title: ${this.title}`);
        // console.log(`Author: ${this.author}`);
        // console.log(`Genre: ${this.genre}`);
        // console.log(`Availability: ${this.availability ? "Available" : "Unavailable"}`);
    }
}

// TEST
// const myBook = new Book("Atomic Habits", "James Clear", "Perosnal Development");
// myBook.displayInfo();


class Library {
    constructor() {
      this.books = [];
    }

    addBook(title, author, genre) {
        const newBook = new Book(title, author, genre);
        this.books.push(newBook);
        console.log(
          `%cADDED:  %c"${title}" to the library.`,
          "color: green; font-weight: bold;",
          "color: white; font-weight: bold;", // title
        );
    }

    searchBook(title) {
        const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
        if (book) {
          book.displayInfo();
        } else {
          console.log(`Book titled "${title}" was not found in the library.`);
        }
    }


    displayBooks() {
      const availableBooks = this.books.filter(book => book.availability);
      if (availableBooks.length > 0) {
        console.log("Available Books in the Library:");
        availableBooks.forEach(book => book.displayInfo());
      } else {
        console.log("No books are currently available in the library.");
      }
    }
}

// Testing
const myLibrary = new Library();


// Adding books to the library
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", "Fiction");
myLibrary.addBook("1984", "George Orwell", "Dystopian");
myLibrary.addBook("Moby Dick", "Herman Melville", "Adventure");


// Searching for a specific book
console.log('\n')
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
console.log(
  "\nSearching for %c'1984'",  
  "color: cyan;");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
myLibrary.searchBook("1984");


// Displaying available books
console.log('\n')
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
console.log("\nDisplaying all available books:");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
myLibrary.displayBooks();


// Borrowing a book
console.log('\n')
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
console.log("\nBorrowing  %c'1984':", "color: cyan;");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
myLibrary.books[1].borrowBook();



// Displaying available books after borrowing
console.log('\n')
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
console.log("\nDisplaying all available books:");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
myLibrary.displayBooks();



// Returning a book
console.log('\n')
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
console.log("\nReturning %c'1984':", "color: cyan;");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
myLibrary.books[1].returnBook();


// Displaying available books after returning
console.log('\n')
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
console.log("\nDisplaying all available books:");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
myLibrary.displayBooks();