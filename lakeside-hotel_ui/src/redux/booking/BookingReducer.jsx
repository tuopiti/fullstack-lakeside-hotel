import { CREATE_BOOKING, FAIL_REQUEST, MAKE_REQUEST } from "./BookingActionType"

const initialstate = {
    loading: true,
    errmessage: ''
}

export const BookingReducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case CREATE_BOOKING:
            return{
                ...state,
                loading:false
            }

        default: return state
    }
}