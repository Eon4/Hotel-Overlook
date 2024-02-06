/* CityList.jsx */
import React, { useEffect, useState } from "react";
import style from "../CityList/cityList.module.scss";

const CityList = ({ countrySlug, onCitySelect }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(`http://localhost:4000/destinations/${countrySlug}`);
        const data = await response.json();
        setCities(data.cities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, [countrySlug]);

  return (
    <div>
      <h2>Cities in {countrySlug}</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.city_id} onClick={() => onCitySelect(city)}>
            {city.name}
            {city.CityImage && (
              <img className={style.cityImage} src={`http://localhost:4000/images/${city.CityImage.city_image_filename}`} alt={city.CityImage.city_image_title} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
