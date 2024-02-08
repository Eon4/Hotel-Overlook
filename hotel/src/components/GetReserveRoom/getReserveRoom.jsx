import React, { useEffect, useState } from "react";
//POSSIBLE DELETE THIS


const ShowMetheRoom = ({ countrySlug, citySlug, hotelSlug, roomSlug, onRoomSelect }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Fetch room details based on slugs
    let url = `http://localhost:4000/destinations/${countrySlug}/${citySlug}/${hotelSlug}/${roomSlug}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRooms(data)) // Update state with room details
      .catch((err) => console.error(err));
  }, [countrySlug, citySlug, hotelSlug, roomSlug]);

  return (
    <div>
      <h2>Hotel Rooms in {hotelSlug}</h2>
      <ul>
        {rooms?.map((room) => (
          <li key={room.room_id} onClick={() => onRoomSelect(room)}>
            <h3>ID for hotelroom: {room.room_id} </h3>
            <h3>Room title {room.title} </h3>
            <h3>Room desc {room.description} </h3>
            <h3>How many people? {room.num_persons} </h3>
            <h3>Kvadratmeter {room.area} </h3>
            <h3>Price from: {room.day_price_normal} </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowMetheRoom;
