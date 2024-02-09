import React from "react";
import style from "./latestNews.module.scss";
import { NavLink } from "react-router-dom";

// Functional component for displaying the latest news card
export const LatestNews = ({ title, teaser, image }) => {
  // Dynamically generate the image source URL
  const imgSrc = `http://localhost:4000/images/${image?.filename}`;

  // Render component
  return (
    <div className={style.newsCardStyle}>
      {/* Display the news image */}
      <img src={imgSrc} alt={title} />
      <section className={style.newsDetails}>
        {/* Add a NavLink for navigation to "/hotelsDest" */}
        <NavLink to="/hotelsDest" className={style.link}>
          {/* Display the news title */}
          <h3>{title}</h3>
          {/* Display the news teaser */}
          <p className={style.teaser}>{teaser}</p>
        </NavLink>
      </section>
    </div>
  );
};
