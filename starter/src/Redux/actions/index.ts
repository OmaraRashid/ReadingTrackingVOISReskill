// src/actions/index.ts
import * as Types from "./types";
import * as BooksAPI from "../../BooksAPI";
import { Dispatch } from "redux";
import { Book } from "../interface/book";



export const getAllBooks = () => (dispatch: Dispatch) => {
  BooksAPI.getAll().then(books =>{
    const action= {
      type: Types.GET_ALL_BOOKS,
      payload: books
    }
    dispatch(action);
  }
  );
};

export const updateBook = (book : Book , shelf : string) => (dispatch : Dispatch ) => {
  BooksAPI.update(book, shelf).then(() =>{
    const action ={
      type: Types.UPDATE_BOOK,
      payload: { book, shelf }
    }
    dispatch(action);
  }
  );
};

export const searchBooks = (query: string) => (dispatch: Dispatch) => {
  BooksAPI.search(query).then(books => {
    if (!Array.isArray(books)) {
      books = [];
    }
    dispatch({
      type: Types.SEARCH_BOOKS,
      payload: books
    });
  });
};

export interface Action {
  type: string;
  payload: any;
}
 