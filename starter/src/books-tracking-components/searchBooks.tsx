import React, { useState, useEffect } from "react";
import { searchBooks } from "../Redux/actions/index";
import { connect } from "react-redux";
import { getSearchedBooks } from "../Redux/selectors";
import { State } from "../Redux/reducers";
import { Book } from "../Redux/interface/book";
import BookComp from "./book";


interface Props {
  books:Book[];
  searchBooks: (query: string) => void;
  onClose: () => void;
}

const SearchBooks: React.FC<Props> = ({ searchBooks , onClose ,books  }) => {
  const [query, setQuery] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    searchBooks(query);
    setIsSearched(true);
  }, [query, searchBooks]);

  const handleSearch = (event: any) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a  className="close-search"
       onClick={onClose}> Close</a>
        <div className="search-books-input-wrapper">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </form>
        </div>
      </div>
<div className="search-books-results">
  <ol className="books-grid">
    { isSearched && books.length ? 
       <div className="bookshelf">
          <div className="bookshelf-books">
            <ol className="books-grid">
              { books
                .map((book: Book) => (
                  <BookComp key={book.id} book={book} />
                ))}
            </ol>
          </div>
        </div>
     : ''
    }
  </ol>
</div>

    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    searchBooks: (query: string) => dispatch(searchBooks(query)),
  };
};

const mapStateToProps = (state: State) => {
    const books = getSearchedBooks(state);
    return {
      books: books.length > 0 ? books : []
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SearchBooks);
