import { SELECT_SHELF, SelectShelfAction, MOVE_TO_SHELF, MoveToShelfAction } from "./books.actions";

interface State {
  selectedShelf: string;
  books: { [key: string]: string };
}

const initialState: State = {
  selectedShelf: "currentlyReading",
  books: {}
};

export const readingTrackingApp = (state = initialState, action: SelectShelfAction | MoveToShelfAction): State => {
  switch (action.type) {
    case SELECT_SHELF:
      return { ...state, selectedShelf: action.payload };
    case MOVE_TO_SHELF:
      const { bookId, shelf } = action.payload;
      return { ...state, books: { ...state.books, [bookId]: shelf } };
    default:
      return state;
  }
};
