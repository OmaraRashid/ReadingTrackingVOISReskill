import React from "react";
import configureStore from "redux-mock-store";
import { getAllBooks } from './Redux/actions';

const mockStore = configureStore([]);

describe("App component", () => {
  let store: any;
  beforeEach(() => {
    store = mockStore({
      books: [],
      loading: false
    });
  });



describe('getAllBooks action', () => {
  it('dispatches the correct action', () => {
    const mockDispatch = jest.fn();
    const action = getAllBooks();
    const result = mockDispatch(action);
    expect(mockDispatch).toHaveBeenCalledWith(action);
  });
});

});
