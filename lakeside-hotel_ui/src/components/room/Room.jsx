import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FunctionFetchRoomList } from "../../redux/room/RoomApi"
import { Col, Container, Row } from "react-bootstrap"
import RoomCard from "./RoomCard"
import RoomFilter from "../common/RoomFilter"
import RoomPaginator from "../common/RoomPaginator"

const Room = () => {
    const [data, setData] = useState([])
	// const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [roomsPerPage] = useState(6)
	const [filteredData, setFilteredData] = useState([])
    const dispatch = useDispatch();
    const roomDatas = useSelector((state) => state.room.roomlist);
    //console.log(roomDatas);
    
    
    useEffect(() => {
        dispatch(FunctionFetchRoomList()); 
    }, [dispatch]);

    useEffect(() => {
        setData(roomDatas);
        setFilteredData(roomDatas);
        setIsLoading(false)
    }, [roomDatas]);

    //console.log(filteredData);
    if (isLoading) {
		return <div>Loading rooms.....</div>
	}
    const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	const totalPages = Math.ceil(filteredData.length / roomsPerPage);

    const renderRooms = () => {
		const startIndex = (currentPage - 1) * roomsPerPage
		const endIndex = startIndex + roomsPerPage
		return filteredData
			.slice(startIndex, endIndex)
			.map((room) => <RoomCard key={room.id} room={room} />)
	}

  return (
    <Container>
        <Row>
            <Col md={6} className="mb-3 mb-md-0">
                <RoomFilter data={data} setFilteredData={setFilteredData} />
            </Col>

            <Col md={6} className="d-flex align-items-center justify-content-end">
                <RoomPaginator
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </Col>
        </Row>

        <Row>{renderRooms()}</Row>

        <Row>
            <Col md={6} className="d-flex align-items-center justify-content-end">
                <RoomPaginator
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </Col>
        </Row>
    </Container>
  )
}

export default Room
