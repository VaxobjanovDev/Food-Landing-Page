import React from "react";
import ImgUrl from "./images/home-section-food.png";
import "./HomeSection.css";

const HomeSection = () => {
  return (
    <>
      <div className="home-section">
        <div className="container">
          <div className="row">
            <div className="col home-left_col">
              <div className="home-text_wrapper">
                <h2 className="heading">FOOD</h2>
                <h3 className="paragraph">
                  Discover Restaurant & Delicius Food
                </h3>
                <div className="search">
                  <input
                    className="input"
                    placeholder="Search Restaurant, Food"
                  />
                  <button className="button-search">GO</button>
                </div>
              </div>
            </div>
            <div className="col home-right_col">
              <div className="home-img_wrapper">
                <img className="home-img" src={ImgUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
