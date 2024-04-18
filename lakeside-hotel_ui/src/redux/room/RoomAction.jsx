
import { ADD_ROOM, DELETE_ROOM, FAIL_REQUEST, GET_ALL_ROOMS, GET_ROOM_OBJ, GET_ROOM_TYPES, MAKE_REQUEST, UPDATE_ROOM } from "./RoomActionType"

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

export const addRoom=()=>{
    return{
        type:ADD_ROOM
    }
}

export const getRoomType=(data)=>{
    return{
        type:GET_ROOM_TYPES,
        payload:data
    }
}

export const getAllRooms=(data)=>{
    return{
        type:GET_ALL_ROOMS,
        payload:data
    }
}

export const getRoomObj=(data)=>{
    return{
        type:GET_ROOM_OBJ,
        payload:data
    }
}

export const deleteRoom=()=>{
    return{
        type:DELETE_ROOM
    }
}

export const updateRoom=()=>{
    return{
        type:UPDATE_ROOM
    }
}

