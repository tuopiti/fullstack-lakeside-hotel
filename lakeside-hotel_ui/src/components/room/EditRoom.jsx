import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FunctionFetchRoomList, FunctionFetchRoomObj, FunctionUpdateRoom } from "../../redux/room/RoomApi";
import { Link, useNavigate, useParams } from "react-router-dom";


const EditRoom = () => {
    const [id, setId] = useState(0);
    const [roomType, setRoomType] = useState("");
    const [roomPrice, setRoomPrice] = useState(0);
    const [photo, setPhoto] = useState("");
    const [imagePreview, setImagePreview] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { roomId } = useParams();
    const roomObj = useSelector((state) => state.room.roomobj);
    //console.log(roomObj);

    useEffect(() => {
        dispatch(FunctionFetchRoomObj(roomId));
    }, [dispatch, roomId])

    useEffect(() => {
        if(roomObj){
            setId(roomObj.id);
            setRoomType(roomObj.roomType);
            setRoomPrice(roomObj.roomPrice);
            setPhoto(roomObj.photo);
            setImagePreview(roomObj.photo);
        }
    }, [roomObj]);

    // console.log(id);
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setPhoto(selectedImage);
        setImagePreview(URL.createObjectURL(selectedImage));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const roomobj = {roomType, roomPrice, photo};
        dispatch(FunctionUpdateRoom(id, roomobj));
        dispatch(FunctionFetchRoomList());
        navigate('/existing-rooms');
    }

  return (
    <div className="container mt-5 mb-5">
        <h3 className="text-center mb-5 mt-5">Edit Room</h3>
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="roomType" className="form-label hotel-color">
                            Room Type
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="roomType"
                            name="roomType"
                            value={roomType}
                            onChange={(e) => setRoomType(e.target.value)}
							/>
					</div>  
                    <div className="mb-3">
                        <label htmlFor="roomPrice" className="form-label hotel-color">
                            Room Price
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="roomPrice"
                            name="roomPrice"
                            value={roomPrice}
                            onChange={(e) => setRoomPrice(e.target.value)}
                        />
					</div>

                    <div className="mb-3">
                        <label htmlFor="photo" className="form-label hotel-color">
                            Photo
                        </label>
                        <input
                            required
                            type="file"
                            className="form-control"
                            id="photo"
                            name="photo"                            
                            onChange={handleImageChange}
                        />
                        {imagePreview && (
                            <img
                                src={`data:image/jpeg;base64,${imagePreview}`}
                                alt="Room preview"
                                style={{ maxWidth: "400px", maxHeight: "400" }}
                                className="mt-3"
                            />
                        )}
                    </div>
                    <div className="d-grid gap-2 d-md-flex mt-2">
                        <Link to={"/existing-rooms"} className="btn btn-outline-info ml-5">
                            back
                        </Link>
                        <button type="submit" className="btn btn-outline-warning">
                            Edit Room
                        </button>
					</div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditRoom
