import { combineReducers } from "redux";
import addBooksReducer from "./addBooks/addBooksReducer";

const rootReducer = combineReducers({
    addBooks: addBooksReducer
})

export default rootReducer;

