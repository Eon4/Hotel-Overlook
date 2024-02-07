import React from "react";
import style from "../GetDest/getDest.module.scss";


export const GetDest = ({ id, name, image }) => {
    const showMeDest = `http://localhost:4000/destinations/${name?.id}`;

  return (
    <>
      <h2>{name}</h2>
      <p>{id}</p>
      {/* Render other details of the selected destination */}
    </>
  );
};
