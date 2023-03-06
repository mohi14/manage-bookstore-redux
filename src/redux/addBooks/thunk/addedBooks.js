import { addBooks } from "../action";


const addedBooks = (data) => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:9000/books", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        });
        const book = await response.json()
        dispatch(addBooks(book))
    }
}

export default addedBooks;