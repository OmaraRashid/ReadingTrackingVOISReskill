import React from "react";
import BookComp from "./book";
import { Book } from "../Redux/interface/book";


interface Props {
title: string;
books: any[];
}
const BookShelf: React.FC<Props> = ({ title, books }) => {
    const shelf = (() => {
      switch (title.toLowerCase()) {
        case "currently reading":
          return "currentlyReading";
        case "want to read":
          return "wantToRead";
        case "read":
          return "read";
        default:
          return "";
      }
    })();
  
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter((book: Book) => book.shelf === shelf)
              .map((book: Book) => (
                <BookComp key={book.id} book={book} />
              ))}
          </ol>
        </div>
      </div>
    );
  };
  

export default BookShelf;