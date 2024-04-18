import { ADD_ROOM, DELETE_ROOM, FAIL_REQUEST, GET_ALL_ROOMS, GET_ROOM_OBJ, GET_ROOM_TYPES, MAKE_REQUEST, UPDATE_ROOM } from "./RoomActionType"

const initialstate = {
    loading: true,
    roomtype: [],
    roomlist: [],
    roomobj: {},
    errmessage: ''
}

export const RoomReducer = (state = initialstate, action) => {
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
        case ADD_ROOM:
            return{
                ...state,
                loading:false
            }
        case GET_ROOM_TYPES:
            return {
                loading: false,
                errmessage: '',
                roomtype:action.payload,  
            }
        case GET_ALL_ROOMS:
            return {
                loading: false,
                errmessage: '',
                roomlist:action.payload,
                roomobj:{}
            }
        case GET_ROOM_OBJ:
            return{
                ...state,
                loading:false,
                roomobj:action.payload
            }
        case DELETE_ROOM:
            return{
                ...state,
                loading:false
            }
           
        case UPDATE_ROOM:
            return{
                ...state,
                loading:false
            }
           
        default: return state
    }
}


