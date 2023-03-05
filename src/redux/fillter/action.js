import { FEATURE_STATUS } from "./actionTypes"


export const featuredFilter = (status) => {
    return {
        type: FEATURE_STATUS,
        payload: status,
    }
}