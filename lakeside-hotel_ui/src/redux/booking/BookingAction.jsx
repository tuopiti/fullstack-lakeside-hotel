import { CREATE_BOOKING, FAIL_REQUEST, MAKE_REQUEST } from "./BookingActionType"

export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}

export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}

export const createBooking =() =>{
    return {
        type: CREATE_BOOKING
    }
}