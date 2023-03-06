import { deleteBooks } from "../action";

const deletedBooks = (id) => {
    return async (dispatch) => {
        const response = fetch(`http://localhost:9000/books/${id}`, {
            method: "DELETE",
        })

        dispatch(deleteBooks(id))
    }
}

export default deletedBooks;