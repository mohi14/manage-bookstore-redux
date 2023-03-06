import { ADD_BOOKS, DELETE_BOOKS, EDIT_BOOKS, FILTER_BOOKS, LOADED_BOOKS } from "./actionTypes";

const initialState = []

const nextBookId = (bookId) => {
    const maxId = bookId.reduce((maxId, book) => Math.max(book.id, maxId), -1)
    return maxId + 1;
}

const addBooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED_BOOKS:
            return action.payload
        case ADD_BOOKS:
            const addedState = [...state, { ...action.payload, id: nextBookId(state) }]
            return addedState

        case DELETE_BOOKS:
            const NotDeletedBooks = state.filter(book => book.id !== action.payload)
            return NotDeletedBooks

        case EDIT_BOOKS:
            const editedBooks = state.map(book => {
                if (book.id === action.payload.id) {
                    return { ...book, name: action.payload.value.name, author: action.payload.value.author, thumbnail: action.payload.value.thumbnail, price: action.payload.value.price, rating: action.payload.value.rating, featured: action.payload.value.featured }
                }
                else {
                    return book
                }
            })
            return editedBooks

        default:
            return state
    }
}

export default addBooksReducer;