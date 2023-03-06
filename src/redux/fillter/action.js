import { FEATURE_STATUS, SEARCH_BOOKS } from "./actionTypes"


export const featuredFilter = (status) => {
    return {
        type: FEATURE_STATUS,
        payload: status,
    }
}

export const searchFilter = (searchText) => {
    return {
        type: SEARCH_BOOKS,
        payload: searchText
    }
}