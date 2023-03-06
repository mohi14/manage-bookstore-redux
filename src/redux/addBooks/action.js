import { ADD_BOOKS, DELETE_BOOKS, EDIT_BOOKS, LOADED_BOOKS } from "./actionTypes"


export const addBooks = (value) => {
    return {
        type: ADD_BOOKS,
        payload: value
    }
}

export const editBooks = (id, value) => {
    return {
        type: EDIT_BOOKS,
        payload: {
            id: id,
            value: value
        }
    }
}

export const deleteBooks = (id) => {
    return {
        type: DELETE_BOOKS,
        payload: id
    }
}

export const loadedBooks = (value) => {
    return {
        type: LOADED_BOOKS,
        payload: value
    }
}

// export const searchBooks = (texts) => {
//     return {
//         type: SEARCH_BOOKS,
//         payload: texts
//     }
// }

