import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import style from "./form.module.scss";

const ReservationForm = () => {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
  
    return (
      <>
        <h1 className={style.hookTitle}>Reservation af værelse</h1>
  
        <form className={style.formStyle} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="fullName">
            Fulde navn:
            <input
              {...register("fullName", { required: true, maxLength: 15 })}
              placeholder="Enter your fullname here"
            ></input>
          </label>
          {errors.fullName && <span>Vær venlig at udfylde dette felt.</span>}
  
  
          <label htmlFor="phone">Skriv telefonnummer her:</label>
          <input
            {...register("phonenumber", { required: true })}
            name="phone"
            
            placeholder="Skriv dit telefonnummer her"
          ></input>
                {errors.phonenumber?.type === 'required' && "Du skal udfylde dette felt med et telefonnummer"}
  
          <label htmlFor="email">
            Email her:
            <input
              {...register("emailRequired", { required: true })}
              placeholder="Skriv din emailaddresse her"
            ></input>
          </label>
          {errors.emailRequired && <span>Udfyld venligst dette felt også.</span>}
          
          <h3>Evt. Kommentar:</h3>
          <textarea
            rows="4"
            cols="50"
            name="comment"
            placeholder="Skriv en kommentar her"
          ></textarea>
  
  <label htmlFor="choice">
    Er du interesseret i at modtage nyheder?
    <div className="radioButtons">
        <label>
            <input type="radio" {...register("choice", { value: "yes" })} value="yes" />
            Ja tak
        </label>
        <label>
            <input type="radio" {...register("choice", { value: "no" })} value="no" />
            Nej Tak
        </label>
    </div>
</label>

  
          <button className='resetMe' type="reset">Nulstil</button>
                <button className='sendMe' type="submit">Send</button>
            </form>
      </>
    );
  };
  

export default ReservationForm;
