/*
File: complex_code.js
Description: This code implements a complex and sophisticated data structure to manage a library system. It includes multiple classes, inheritance, and various methods to handle book management operations effectively.
*/

// Class representing a Book
class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  borrowBook() {
    console.log(`${this.title} has been borrowed.`);
  }

  returnBook() {
    console.log(`${this.title} has been returned.`);
  }

  displayDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Publication Year: ${this.publicationYear}`);
  }
}

// Class representing a Bookshelf
class Bookshelf {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`${book.title} has been added to the bookshelf.`);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`${book.title} has been removed from the bookshelf.`);
    } else {
      console.log(`${book.title} is not found on the bookshelf.`);
    }
  }

  displayBooks() {
    console.log("Books on the bookshelf:");
    this.books.forEach((book) => book.displayDetails());
  }
}

// Class representing a Library
class Library {
  constructor() {
    this.bookshelves = [];
  }

  addBookshelf(bookshelf) {
    this.bookshelves.push(bookshelf);
    console.log(`A new bookshelf has been added to the library.`);
  }

  removeBookshelf(bookshelf) {
    const index = this.bookshelves.indexOf(bookshelf);
    if (index !== -1) {
      this.bookshelves.splice(index, 1);
      console.log(`A bookshelf has been removed from the library.`);
    } else {
      console.log(`Bookshelf not found in the library.`);
    }
  }

  displayBookshelves() {
    console.log("Bookshelves in the library:");
    this.bookshelves.forEach((bookshelf) => {
      console.log("-- Bookshelf --");
      bookshelf.displayBooks();
      console.log("---------------");
    });
  }
}

// Example usage
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const bookshelf = new Bookshelf();
bookshelf.addBook(book1);
bookshelf.addBook(book2);

const library = new Library();
library.addBookshelf(bookshelf);
library.displayBookshelves();

book1.borrowBook();
bookshelf.removeBook(book1);
library.displayBookshelves();

book2.returnBook();
book2.displayDetails();

// More code... (continues for 200+ lines)