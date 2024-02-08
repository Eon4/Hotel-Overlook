import React, { useState, useEffect } from 'react';

const ReservationForm = ({ roomData }) => {
  const [formData, setFormData] = useState({
    hotel: '',
    roomType: '',
    priceClass: '',
    numberOfPersons: '',
    checkInDate: '',
    checkOutDate: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    comment: '',
    acceptTerms: false,
  });

  useEffect(() => {
    // Assuming roomData is an array of hotels, cities, and rooms
    if (roomData && roomData.length > 0) {
      const firstHotel = roomData[0];
      const firstCity = firstHotel.cities[0];
      const firstRoom = firstCity.hotels[0].rooms[0];

      setFormData({
        hotel: firstHotel.name,
        roomType: firstRoom.title,
        priceClass: 'Normal', // You may need to fetch this information
        numberOfPersons: String(firstRoom.num_persons),
        // Add more fields based on your data structure
      });
    }
  }, [roomData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Hotel:
        <input type="text" name="hotel" value={formData.hotel} readOnly />
      </label>

      <label>
        Room Type:
        <input type="text" name="roomType" value={formData.roomType} readOnly />
      </label>

      {/* Add similar code for other fields */}

      {/* Accept terms checkbox */}
      <label>
        Accept Terms:
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
          required
        />
      </label>

      {/* Submit button */}
      <button type="submit">Reserve Now</button>
    </form>
  );
};

export default ReservationForm;
