package com.piti.java.lakesidehotel.service;

import java.util.List;

import com.piti.java.lakesidehotel.model.BookedRoom;

public interface BookingService {
	void cancelBooking(Long bookingId);
    List<BookedRoom> getAllBookingsByRoomId(Long roomId);
    String saveBooking(Long roomId, BookedRoom bookingRequest);
    BookedRoom findByBookingConfirmationCode(String confirmationCode);
    List<BookedRoom> getAllBookings();
    List<BookedRoom> getBookingsByUserEmail(String email);
}
