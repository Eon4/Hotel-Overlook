import React, { useEffect, useState } from "react";
import { GetDest } from "../../components/GetDest/getDest";
import CityList from "../../components/CityList/cityList";
import { Link } from "react-router-dom";
import style from "../HotelsandDest/HotelsandDest.module.scss";
import GetHotel from "../../components/GetHotel/getHotel";
import GetHotelRooms from "../../components/GetHotelRooms/getHotelRooms";
// import ShowMetheRoom from "../../components/ShowChosenRoom/showChosenRoom";


export const HotelsandDest = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Effect to fetch all destinations on component mount
  useEffect(() => {
    let url = `http://localhost:4000/destinations`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => console.error(err));
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedCity(null); // Reset selected city when switching countries
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  return (
    <>
      <h2>Hotels and Destination Page Here</h2>
      {destinations.map((destination) => (
        <div key={destination.country_id}>
          <Link key={destination.country_id} to="#" onClick={() => handleCountrySelect(destination)}>
            {destination.name}
          </Link>
        </div>
      ))}
      {selectedCountry && (
        <div>
          <GetDest name={selectedCountry.name} />
          <CityList countrySlug={selectedCountry.slug} onCitySelect={handleCitySelect} />
          {selectedCity && (
            <div>
              <h3>Selected City: {selectedCity.name}</h3>
              {selectedCity.CityImage && (
               <img
               className={style.city_image}
               src={`http://localhost:4000/images/${selectedCity.CityImage.city_image_filename}`}
               alt={selectedCity.CityImage.city_image_title}
             />
             
              )}
              {/* Show hotels when a city is selected */}
              <h3>List of hotels in {selectedCity.name}</h3>
              <GetHotel countrySlug={selectedCountry.slug} citySlug={selectedCity.slug} onHotelSelect={handleHotelSelect} />
              {/* Show hotel rooms when a hotel is selected */}
              {selectedHotel && (
                <div>
                  <h3>List of rooms in {selectedHotel.title}</h3>
                  <GetHotelRooms
                    countrySlug={selectedCountry.slug}
                    citySlug={selectedCity.slug}
                    hotelSlug={selectedHotel.slug}
                    onRoomSelect={handleRoomSelect}
                    
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};
