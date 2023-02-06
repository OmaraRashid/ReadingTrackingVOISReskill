import { applyMiddleware, createStore } from "redux";
import booksReducer from "../reducers/index";
import thunk from "redux-thunk";

const store = createStore(booksReducer,applyMiddleware(thunk));

export default store;
