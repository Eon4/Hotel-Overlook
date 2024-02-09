import React, { useEffect, useState } from "react";
import style from "../GetHotel/getHotel.module.scss";

// Functional component to fetch and display hotels
const GetHotel = ({ countrySlug, citySlug, onHotelSelect }) => {
  // State to store the list of hotels
  const [hotels, setHotels] = useState([]);

  // Effect to fetch hotels when countrySlug or citySlug changes
  useEffect(() => {
    // Async function to fetch hotels data
    const fetchHotels = async () => {
      try {
        // Fetch hotels data from the API
        const response = await fetch(`http://localhost:4000/destinations/${countrySlug}/${citySlug}`);
        const data = await response.json();
        // Update state with the list of hotels
        setHotels(data.cities[0].hotels);
      } catch (error) {
        // Log an error if fetching hotels fails
        console.error("Error fetching hotels:", error);
      }
    };

    // Call the fetchHotels function
    fetchHotels();
  }, [countrySlug, citySlug]);

  // Render component
  return (
    <div>
      {/* Display the country name in the heading */}
      <h2>Hotels in {countrySlug}</h2>
      <ul>
        {/* Map through the list of hotels and display each as a list item */}
        {hotels.map((hotel) => (
          <li key={hotel.hotel_id} onClick={() => onHotelSelect(hotel)}>
            {/* Display the hotel title */}
            {hotel.title}
            {/* Check if hotel image data is present and display it */}
            {hotel.HotelImage && (
              <img
                // Apply a custom style class to the hotel image
                className={style.hotel_image_title}
                // Set the image source dynamically based on the API response
                src={`http://localhost:4000/images/${hotel.HotelImage.hotel_image_filename}`}
                // Set the alt text for the hotel image
                alt={hotel.HotelImage.hotel_image_title}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the component as the default export
export default GetHotel;
