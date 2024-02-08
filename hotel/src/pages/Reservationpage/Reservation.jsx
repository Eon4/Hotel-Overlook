import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReservationForm from "../../components/Form/form";

export const Reservation = () => {
  const { countrySlug, citySlug, hotelSlug, roomSlug } = useParams();
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        let url = `http://localhost:4000/destinations/${countrySlug}/${citySlug}/${hotelSlug}/${roomSlug}`;
        const response = await fetch(url);
        const data = await response.json();
        setRoomData(data); // Assuming the response is the entire room data object
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchRoomData();
  }, [countrySlug, citySlug, hotelSlug, roomSlug]);

  return (
    <>
      <h2>Reservation page here</h2>
      {roomData ? (
        <ReservationForm roomData={roomData} />
      ) : (
        <p>Loading room data...</p>
      )}
    </>
  );
};
