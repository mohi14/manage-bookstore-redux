import { FEATURE_STATUS } from "./actionTypes";


const initialState = {}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FEATURE_STATUS:

            return {
                ...state, status: action.payload
            };

        default:
            return state;
    }
}

export default filterReducer;