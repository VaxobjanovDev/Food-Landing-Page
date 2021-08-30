import React from "react";
import Right_image from "./images/left.png";
import "./Booking.css";

const Booking = () => {
  return (
    <>
      <div className="booking-section">
        <img className="right-image" src={Right_image} />
        <div className="container">
          <div className="booking-window">
            <h2 className="booking-header__text">Advance Booking</h2>
            <div className="booking-search__component">
              <input className="search-input" placeholder="Search Restaurant" />
              <button className="search-button">GO</button>
            </div>
            <div className="booking-menu__items">
              <div className="booking-inputs">
                <input type="date"/>
                <input type="time"/>
              </div>
              <select className="booking-select">
                <option>3 People</option>
                <option>5 People</option>
                <option>8 People</option>
                <option>10 People</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
