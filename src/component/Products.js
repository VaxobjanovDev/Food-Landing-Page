import React from "react";
import SliderProducts from "./Testimonalis/Slider";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="products-section">
        <div className="container">
          <div className="row products-row">
            <div className="col products-left__col">
              <h1>some top restaurant for dining in or Take away!</h1>
            </div>
            <div className="col products-right__col">
              <p className="products-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
                adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
                donec vestibulum tristique leo bibendum in a, tincidunt.
                Volutpat metus id amet, nam hac magna accumsan. Nascetur ac
                tortor purus ultrices morbi tellus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="products-slider">
            <SliderProducts />
          </div>
        </div>
      </div>
    </>
    
  );
};

export default Products;
