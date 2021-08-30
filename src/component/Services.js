import React from "react";
import BoookingTable from "./images/bookTable.png";
import DeliveryImg from "./images/delivery.png";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="services-section">
        <div className="container">
          <div className="text-header">
            <div className="row">
              <div className="col services-left__col">
                <h1>Our Services</h1>
              </div>
              <div className="col services-right__col">
                <p className="services-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
                  adipiscing cursus auctor eget sed phasellus senectus. Ut
                  tellus donec vestibulum tristique leo bibendum in a,
                  tincidunt. Volutpat metus id amet, nam hac magna accumsan.
                  Nascetur ac tortor purus ultrices morbi tellus. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Est, adipiscing
                  cursus auctor eget sed.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="booking-table__cover">
                <div className="cover-image">
                  <img src={BoookingTable} />
                </div>
                <div className="cover-texts">
                  <h3>Advanced table booking</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
              </div>
              <div className="food-for__cover">
                <div className="cover-texts">
                  <h3>Food for free 24/7</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
                <div className="cover-image">
                  <img src={BoookingTable} />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="delivery__cover">
                <img src={DeliveryImg} />
                <div className="delivery-text">
                  <h3>Free home delivery at your door steps</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
