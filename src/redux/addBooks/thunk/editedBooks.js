import { editBooks } from "../action"

const editedBooks = (id, data) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        const book = await response.json()
        dispatch(editBooks(id, book))
    }
}

export default editedBooks;