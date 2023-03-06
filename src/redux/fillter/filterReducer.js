import { FEATURE_STATUS, SEARCH_BOOKS } from "./actionTypes";


const initialState = { status: "ALL" }

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FEATURE_STATUS:
            return {
                ...state, status: action.payload
            };

        case SEARCH_BOOKS:
            return { ...state, searchText: action.payload }
        default:
            return state;
    }
}

export default filterReducer;