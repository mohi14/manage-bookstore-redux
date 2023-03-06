import { loadedBooks } from "../action";


const fetchBooks = async (dispatch) => {
    const response = await fetch("http://localhost:9000/books");
    const books = await response.json();

    dispatch(loadedBooks(books))
}

export default fetchBooks;