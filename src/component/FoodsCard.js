import React from "react";
import FoodCardData from "./Data/FoodCardData";
import "./FoodsCard.css";

const FoodsCard = () => {
  return (
    <>
      <div className="foods-section">
        <div className="container">
          <div className="foods-text_header">
            <h1>Explore Our Foods</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
              adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
              donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat
              metus id amet.
            </p>
          </div>
          {FoodCardData.map((item) => {
            return (
              <div className="card">
                <div className="card-body">
                  <div className="card-image__wrap">
                    <img src={item.img} />
                  </div>
                  <div className="card-text__wrap">
                    <h4>{item.text}</h4>
                    <span>{item.price}</span>
                    <p>{item.paragraph}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FoodsCard;
