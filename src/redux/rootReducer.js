import { combineReducers } from "redux";
import addBooksReducer from "./addBooks/addBooksReducer";
import filterReducer from "./fillter/filterReducer";

const rootReducer = combineReducers({
    addBooks: addBooksReducer,
    filter: filterReducer
})

export default rootReducer;

