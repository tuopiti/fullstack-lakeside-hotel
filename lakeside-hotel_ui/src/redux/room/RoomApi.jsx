import axios from "axios"
import { toast } from "react-toastify"
import { addRoom, deleteRoom, failRequest, getAllRooms, getRoomObj, getRoomType, makeRequest, updateRoom } from "./RoomAction"
import { base_url } from "../../url/url"


export function FunctionAddRoom(photo, roomType, roomPrice) {
	const formData = new FormData()
	formData.append("photo", photo)
	formData.append("roomType", roomType)
	formData.append("roomPrice", roomPrice)
	return async (dispatch) => {
        dispatch(makeRequest());
        try {
            await axios.post(`${base_url}/rooms/add/new-room`, formData);
            dispatch(addRoom());
            toast.success('User Added successfully.');
        } catch (err) {
            dispatch(failRequest(err.message));
            toast.error('failed to add user.');
        }
    };
}

export function FunctionGetRoomTypes() {
    return async (dispatch)=>{
        dispatch(makeRequest());
        //setTimeout(() => {
            // await axios.get(`${base_url}/rooms/room/types`).then(response=>{
            //   const roomType = response.data;
            //   dispatch(getRoomType(roomType));
            // }).catch(err=>{
            //   dispatch(failRequest(err.message))
            // })
       // }, 2000);

       try {
            const roomType = await axios.get(`${base_url}/rooms/room/types`);
            const roomTypeData = roomType.data;
            dispatch(getRoomType(roomTypeData));
        } catch (err) {
            dispatch(failRequest(err.message));  
        }
    }
}

// export async function FunctionGetRoomTypes(dispatch) {	
//     dispatch(makeRequest());
//     await axios.get('http://localhost:8000/user').then(response=>{
//         const roomType = response.data;
//         return dispatch(getRoomType(roomType));
//     }).catch(err=>{
//         return dispatch(failRequest(err.message))
//     })    
// }

export const FunctionFetchRoomList=()=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.get(`${base_url}/rooms/all-rooms`).then(res=>{
            const roomlist=res.data;
            dispatch(getAllRooms(roomlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
    }
}

export const FunctionDeleteRoom=(roomId)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        try {
            axios.delete(`${base_url}/rooms/delete/room/${roomId}`);
            dispatch(deleteRoom());
            toast.success('Delete Room '+ roomId +' successfully.');
        }catch (err) {
            dispatch(failRequest(err.message));  
        } 
    }
}


export const FunctionFetchRoomObj=(roomId)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      
    axios.get(`${base_url}/rooms/room/${roomId}`).then(res=>{
        const getRoomById=res.data;
        dispatch(getRoomObj(getRoomById));
        }).catch(err=>{
        dispatch(failRequest(err.message))
        })
     
     
    }
}


export const FunctionUpdateRoom=(roomId,roomData)=>{
    const formData = new FormData()
	formData.append("roomType", roomData.roomType)
	formData.append("roomPrice", roomData.roomPrice)
	formData.append("photo", roomData.photo)
    return (dispatch)=>{
      dispatch(makeRequest());
      try {
            axios.put(`${base_url}/rooms/update/${roomId}`, formData);
            dispatch(updateRoom());
            toast.success('Room Updated successfully.')
      }catch (err) {
        dispatch(failRequest(err.message));  
      } 
      
        // axios.put('http://localhost:8000/user/'+code,data).then(res=>{
        //     dispatch(updateRoom());
        //     toast.success('Room Updated successfully.')
        //   }).catch(err=>{
        //     dispatch(failRequest(err.message))
        //   })
     
     
    }
}



