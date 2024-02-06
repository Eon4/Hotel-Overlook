import React from "react";
import { Navbar } from '../../components/Navigation/navbar';
import style from "../Footer/footer.module.scss";
import iconFacebook from "./../../assets/SoMeIcons/icon_Facebook.svg";
import iconTwitter from "./../../assets/SoMeIcons/icon_Twitter.svg";

// Inside Footer component

export const Footer = () => {
  return (
    <footer className={style.footerStyle}>
      <section>
        <p>© 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p>
        <div className={style.socialIcons}>
          <img src={iconFacebook} alt="Facebook Icon" className={style.icon} />
          <img src={iconTwitter} alt="Twitter Icon" className={style.icon} />
        </div>
        <Navbar footerStyle showLogo={false} />
      </section>
    </footer>
  );
};
