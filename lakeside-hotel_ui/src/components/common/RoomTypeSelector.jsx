import { useEffect, useState } from 'react'
import { FunctionGetRoomTypes } from '../../redux/room/RoomApi'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
    
	const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false)
	const [newRoomType, setNewRoomType] = useState("")
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(FunctionGetRoomTypes());
    }, [dispatch]);
    const roomTypes = useSelector((state) => state.room.roomtype);

    
    const handleNewRoomTypeInputChange = (e) => {
		setNewRoomType(e.target.value)
	}

    const handleAddNewRoomType = () => {
		if (newRoomType !== "") {
            roomTypes.push([newRoomType])
			setNewRoomType("")
			setShowNewRoomTypeInput(false)
		}
	}
    
    return (
        <>
            
            {roomTypes && roomTypes.length > 0 && (
                <div>
                    <select
                        required
                        className="form-select"
                        name="roomType"
                        onChange={(e) => {
                            if (e.target.value === "Add New") {
                                setShowNewRoomTypeInput(true)
                            } else {
                                handleRoomInputChange(e)
                            }
                        }}
                        value={newRoom.roomType}
                        >
                        <option value="">Select a room type</option>
                        <option value={"Add New"}>Add New</option>
                        
                        {roomTypes.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                    {showNewRoomTypeInput && (
                        <div className="mt-2">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter New Room Type"
                                    value={newRoomType}
                                    onChange={handleNewRoomTypeInputChange}
                                />
                                <button className="btn btn-primary" type="button" onClick={handleAddNewRoomType}>
                                    Add
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}  
        </>
    )
}

RoomTypeSelector.propTypes = {
	handleRoomInputChange: PropTypes.func.isRequired,
	newRoom: PropTypes.object.isRequired,
};

export default RoomTypeSelector
