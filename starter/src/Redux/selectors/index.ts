import { State } from '../reducers/index';

export const getAllBooks = (state: State) => state.books;
export const getSearchedBooks = (state: State) => state.searchedBooks;
