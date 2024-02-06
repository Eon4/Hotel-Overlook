import React from "react";
import style from "./latestNews.module.scss";
import { NavLink } from "react-router-dom";

export const LatestNews = ({ title, teaser, image}) => {
  const imgSrc = `http://localhost:4000/images/${image?.filename}`;

  return (
    <div className={style.newsCardStyle}>
      <img src={imgSrc} alt={title} />
      <section className={style.newsDetails}>
        <NavLink to="/hotelsDest" className={style.link}>
          <h3>{title}</h3>
          <p className={style.teaser}>{teaser}</p>
        </NavLink>
      </section>
    </div>
  );
};


