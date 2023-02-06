import { Book } from "./book";

export interface BooksState {
    books: Book[];
    selectedBook: Book | null;
  }

  

  export interface Shelf {
    currentlyReading: Book[];
    wantToRead: Book[];
    read: Book[];
  }
  