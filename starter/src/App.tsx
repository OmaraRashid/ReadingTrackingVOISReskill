import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllBooks } from "./Redux/selectors";
import { getAllBooks as getAllBooksAction } from "./Redux/actions";
import BookShelf from "./books-tracking-components/bookShelf";
import { State } from "./Redux/reducers";
import { Book } from "./Redux/interface/book";
import SearchBooks from "./books-tracking-components/searchBooks";


interface Props {
  currentlyReading: Book[];
  wantToRead: Book[];
  read: Book[];
  getAllBooks: () => void;
}

const mapStateToProps = (state: State) => {
  const books = getAllBooks(state);
  return {
    currentlyReading: books.filter(book => book.shelf === "currentlyReading"),
    wantToRead: books.filter(book => book.shelf === "wantToRead"),
    read: books.filter(book => book.shelf === "read")
  };
};

const App: React.FC<Props> = ({ currentlyReading, wantToRead, read, getAllBooks }) => {
  useEffect(() => {
    getAllBooks();
  }, []);
  const [showSearchPage, setShowSearchpage] = useState(false);
  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBooks onClose={() => setShowSearchpage(false)}  />
      ) : (
        <div>
          <BookShelf title="Currently Reading" books={currentlyReading} />
          <BookShelf title="Want to Read" books={wantToRead} />
          <BookShelf title="Read" books={read} />
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}  



const mapDispatchToProps = {
  getAllBooks: getAllBooksAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
