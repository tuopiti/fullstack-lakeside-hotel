import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import AddRoom from './components/room/AddRoom'
import Store from './redux/room/Store'
import { ToastContainer } from 'react-toastify'
import Home from './components/home/Home'
import ExistingRooms from './components/room/ExistingRooms'
import EditRoom from './components/room/EditRoom'
import Footer from './components/layout/Footer'
import NavBar from './components/layout/NavBar'
import RoomListing from './components/room/RoomListing'
import Admin from './components/admin/Admin'
import Checkout from './components/booking/Checkout'
import BookingSuccess from './components/booking/BookingSuccess'
import Bookings from './components/booking/Bookings'
import FindBooking from './components/booking/FindBooking'

function App() {
    return(
        <Provider store={Store}>  
            {/* <main>   */}
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/edit-room/:roomId" element={<EditRoom />} />
                        <Route path="/existing-rooms" element={<ExistingRooms />} />
                        <Route path="/add-room" element={<AddRoom />} />
                        <Route path="/browse-all-rooms" element={<RoomListing />} />
                        <Route path="/admin" element={<Admin />} />

                        <Route
							path="/book-room/:roomId"
                            element={<Checkout />}
						/>
                        <Route path="/booking-success" element={<BookingSuccess />} />
                        <Route path="/existing-bookings" element={<Bookings />} />
                        <Route path="/find-booking" element={<FindBooking />} />

                    </Routes>
                </Router>
                <Footer />

                <ToastContainer></ToastContainer>
            {/* </main> */}
           
        </Provider>
    )
    
}

export default App
