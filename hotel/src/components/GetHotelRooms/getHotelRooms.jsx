import React, { useEffect, useState } from "react";
import style from "../GetHotelRooms/getHotelRooms.module.scss";

const GetHotelRooms = ({ countrySlug, citySlug, hotelSlug, onRoomSelect }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch(`http://localhost:4000/destinations/${countrySlug}/${citySlug}/${hotelSlug}`);
        const data = await response.json();
        setRooms(data.cities[0].hotels[0].rooms); // Assuming rooms are nested under hotels
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, [countrySlug, citySlug, hotelSlug]);

  return (
    <div>
      <h2>Hotel Rooms in {hotelSlug}</h2>
      <ul className= {style.roomCard} >
        {/* Adjust the mapping of rooms */}
        {rooms.map((room) => (
          <li key={room.room_id} onClick={() => onRoomSelect(room)}>
           <h3>Room title {room.title} </h3>
          <h3>Room desc {room.description} </h3> 
           <h3>How many people? {room.num_persons}  </h3>
            <h3>Kvadratmeter {room.area}  </h3>
           <h3>Price from:  {room.day_price_normal}  </h3>
            {room.RoomImage && (
              <img
                className={style.room_image_title}
                src={`http://localhost:4000/images/${room.RoomImage.room_image_filename}`}
                alt={room.RoomImage.room_image_title}
              />
            )}
                  <button>Click button here</button>

          </li>
        ))}
      </ul>
    </div>
  );
};
export default GetHotelRooms;
