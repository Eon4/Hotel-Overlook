import React, { useEffect, useState } from "react";
import style from "../GetHotelRooms/getHotelRooms.module.scss";

// Functional component to fetch and display hotel rooms
const GetHotelRooms = ({ countrySlug, citySlug, hotelSlug, roomSlug, onRoomSelect }) => {
  // State to store the list of hotel rooms
  const [rooms, setRooms] = useState([]);

  // Effect to fetch hotel rooms when relevant slugs change
  useEffect(() => {
    // Async function to fetch hotel room data
    const fetchRooms = async () => {
      try {
        // Fetch hotel room data from the API
        const response = await fetch(`http://localhost:4000/destinations/${countrySlug}/${citySlug}/${hotelSlug}`);
        const data = await response.json();

        // Log the API response for debugging
        console.log("API response:", data);

        // Check if the data is valid and has the necessary properties
        if (data && data.cities && data.cities.length > 0 && data.cities[0].hotels && data.cities[0].hotels.length > 0) {
          const hotel = data.cities[0].hotels[0];

          // Check if the hotel has rooms
          if (hotel.rooms && hotel.rooms.length > 0) {
            // Update state with the list of hotel rooms
            setRooms(hotel.rooms);
          } else {
            console.error("No rooms found for the hotel:", hotelSlug);
          }
        } else {
          console.error("Invalid data structure:", data);
        }
      } catch (error) {
        // Log an error if fetching hotel rooms fails
        console.error("Error fetching rooms:", error);
      }
    };

    // Call the fetchRooms function
    fetchRooms();
  }, [countrySlug, citySlug, hotelSlug, roomSlug]);

  // Render component
  return (
    <div>
      {/* Display the hotel name in the heading */}
      <h2>Hotel Rooms in {hotelSlug}</h2>
      {/* Display a list of hotel rooms */}
      <ul className={style.roomCard}>
        {rooms.map((room) => (
          <li key={room.room_id} onClick={() => onRoomSelect(room)}>
            {/* Display information about each hotel room */}
            <h3>ID for hotel room: {room.room_id} </h3>
            <h3>Room title: {room.title} </h3>
            <h3>Room description: {room.description} </h3>
            <h3>How many people? {room.num_persons} </h3>
            <h3>Square meters: {room.area} </h3>
            <h3>Price from: {room.day_price_normal} </h3>
            {/* Add a button for booking */}
            <button>Click to book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the component as the default export
export default GetHotelRooms;

