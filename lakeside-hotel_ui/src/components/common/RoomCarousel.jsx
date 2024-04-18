import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FunctionFetchRoomList } from '../../redux/room/RoomApi';
import { Link } from "react-router-dom"
import { Card, Carousel, Col, Container, Row } from "react-bootstrap"

const RoomCarousel = () => {
    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.room.roomlist);
    useEffect(() => {
        dispatch(FunctionFetchRoomList());
    }, [dispatch])

    if (!rooms) {
        return null; // or loading indicator
    }
    
  return (
    <section className="bg-light mb-5 mt-5 shadow">
        <Link to={"/browse-all-rooms"} className="hote-color text-center">
            Browse all rooms
        </Link>

        <Container>
            <Carousel indicators={false}>
                {[...Array(Math.ceil(rooms.length / 4))].map((_, index) => (
                    <Carousel.Item key={index}>
                        <Row>
                            {rooms.slice(index * 4, index * 4 + 4).map((room) => (
                                <Col key={room.id} className="mb-4" xs={12} md={6} lg={3}>
                                    <Card>
                                        <Link to={`/book-room/${room.id}`}>
                                            <Card.Img
                                                variant="top"
                                                src={`data:image/png;base64, ${room.photo}`}
                                                alt="Room Photo"
                                                className="w-100"
                                                style={{ height: "180px" }}
                                            />
                                        </Link>
                                        <Card.Body>
                                            <Card.Title className="hotel-color">{room.roomType}</Card.Title>
                                            <Card.Title className="room-price">${room.roomPrice}/night</Card.Title>
                                            <div className="flex-shrink-0">
                                                <Link to={`/book-room/${room.id}`} className="btn btn-primary btn-sm">
                                                    Book Now
                                                </Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    </section>
  )
}

export default RoomCarousel
