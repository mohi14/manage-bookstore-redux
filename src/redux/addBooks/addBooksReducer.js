import { ADD_BOOKS } from "./actionTypes";

const initialState = []

const nextBookId = (bookId) => {
    const maxId = bookId.reduce((maxId, book) => Math.max(book.id, maxId), -1)
    return maxId + 1;
}

const addBooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKS:
            const addedState = [...state, { ...action.payload, id: nextBookId(state) }]
            return addedState

        default:
            return state
    }
}

export default addBooksReducer;