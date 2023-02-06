import React from "react";
import { connect, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { updateBook } from "../Redux/actions/index";
import { Book } from "../Redux/interface/book";

interface Props {
  book: Book;
}

const BookComp: React.FC<Props> = ({ book }) => {
    const dispatch = useDispatch();
    const handleChange = (event: any) => {
    const shelf = event.target.value as string;
    updateBook(book, shelf)(dispatch);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${
                book.imageLinks?.thumbnail || ""
              }")`
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={handleChange}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};

const mapDispatchToProps ={
  updateBook
};

export default connect(null, mapDispatchToProps)(BookComp);
