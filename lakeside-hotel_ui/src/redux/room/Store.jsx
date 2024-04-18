import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { RoomReducer } from "./RoomReducer";


const rootreducer=combineReducers({
                                    room:RoomReducer
                                    
                                });
                                
const Store=configureStore({reducer:rootreducer})
export default Store;

