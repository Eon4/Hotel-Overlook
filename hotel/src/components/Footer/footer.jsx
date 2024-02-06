import React from "react";
import { Navbar } from '../../components/Navigation/navbar';
import style from "../Footer/footer.module.scss";


// Inside Footer component

export const Footer = () => {
  return (
    <footer className={style.footerStyle}>
      <section>
        <p>© 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p>
        <Navbar footerStyle showLogo={false} />
      </section>
    </footer>
  );
};
