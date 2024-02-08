import React, { useEffect, useState } from "react";
import style from "../GetHotelRooms/getHotelRooms.module.scss";


const GetHotelRooms = ({ countrySlug, citySlug, hotelSlug, roomSlug, onRoomSelect }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
        try {
          const response = await fetch(`http://localhost:4000/destinations/${countrySlug}/${citySlug}/${hotelSlug}`);
          const data = await response.json();
      
          console.log("API response:", data);
      
          // Check if the data is not null and has the necessary properties
          if (data && data.cities && data.cities.length > 0 && data.cities[0].hotels && data.cities[0].hotels.length > 0) {
            const hotel = data.cities[0].hotels[0];
      
            // Check if the hotel has rooms
            if (hotel.rooms && hotel.rooms.length > 0) {
              setRooms(hotel.rooms);
            } else {
              console.error("No rooms found for the hotel:", hotelSlug);
            }
          } else {
            console.error("Invalid data structure:", data);
          }
        } catch (error) {
          console.error("Error fetching rooms:", error);
        }
      };
      

    fetchRooms();
  }, [countrySlug, citySlug, hotelSlug, roomSlug]);

  return (
    <div>
      <h2>Hotel Rooms in {hotelSlug}</h2>
      <ul className={style.roomCard}>
        {rooms.map((room) => (
  <li key={room.room_id} onClick={() => onRoomSelect(room)}>
  <h3>ID for hotelroom: {room.room_id} </h3>
            <h3>Room title {room.title} </h3>
            <h3>Room desc {room.description} </h3>
            <h3>How many people? {room.num_persons} </h3>
            <h3>Kvadratmeter {room.area} </h3>
            <h3>Price from: {room.day_price_normal} </h3>
            <button>Click to book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetHotelRooms;
