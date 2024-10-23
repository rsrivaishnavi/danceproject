import React, { useState } from 'react';

const Booking = ({ className, classPrice }) => {
  const [seats, setSeats] = useState(1);

  const handleBooking = () => {
    const totalPrice = seats * classPrice;
    console.log(`Booked ${seats} seat(s) for ${className}. Total: $${totalPrice}`);
    // Payment process integration goes here
  };

  return (
    <div>
      <h3>{className}</h3>
      <input
        type="number"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
        min="1"
      />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default Booking;
