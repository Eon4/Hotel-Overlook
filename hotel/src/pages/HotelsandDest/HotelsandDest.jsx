import React, { useEffect, useState } from "react";
import { GetDest } from "../../components/GetDest/getDest";
import CityList from "../../components/CityList/cityList";
import { Link } from "react-router-dom";
import style from "../HotelsandDest/HotelsandDest.module.scss";

export const HotelsandDest = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

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
                  src={`http://localhost:4000/images/${selectedCity.CityImage.city_image_filename}`}
                  alt={selectedCity.CityImage.city_image_title}
             
                />
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};