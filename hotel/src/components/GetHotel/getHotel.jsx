import React, { useEffect, useState } from "react";
import style from "../GetHotel/getHotel.module.scss";

const GetHotel = ({ countrySlug, citySlug, onHotelSelect }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(`http://localhost:4000/destinations/${countrySlug}/${citySlug}`);
        const data = await response.json();
        setHotels(data.cities[0].hotels);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, [countrySlug, citySlug]);

  return (
    <div>
      <h2>Hotels in {countrySlug}</h2>
      <ul>
        {/* Adjust the mapping of hotels */}
        {hotels.map((hotel) => (
          <li key={hotel.hotel_id} onClick={() => onHotelSelect(hotel)}>
            {hotel.title}
            {/* Assuming hotel_image_filename is present in the data */}
            {hotel.HotelImage && (
              <img
                className={style.hotel_image_title}
                src={`http://localhost:4000/images/${hotel.HotelImage.hotel_image_filename}`}
                alt={hotel.HotelImage.hotel_image_title}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetHotel;
