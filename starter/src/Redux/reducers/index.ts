import * as Types from "../actions/types";
import {Book} from "../interface/book";
import { Action } from "../actions";

const initialState: { books: Book[]; searchedBooks: Book[]; } = {
  books: [],
  searchedBooks: []
};


export type State = typeof initialState;

const booksReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    
    case Types.GET_ALL_BOOKS:
      return {
        ...state,
        books: action.payload
      };
    case Types.UPDATE_BOOK:
      const { book, shelf } = action.payload;
      const updatedShelf: string = shelf;
      return {
        ...state,
        books: state.books.map((b:Book) =>
          b.id === book.id ? { ...b, shelf : updatedShelf } : b
        )
      };
    case Types.SEARCH_BOOKS:
      return {
        ...state,
        searchedBooks: action.payload
      };
    default:
      return state;
  }
}

export default booksReducer;


