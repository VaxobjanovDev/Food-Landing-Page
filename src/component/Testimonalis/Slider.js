import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import SliderData from "../Data/SliderData";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderProducts = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {SliderData.map((item) => {
          return (
            <div className="card slider-card" style={{ width: "400px" }}>
              <div className="card-wrapper">
                <div className="card-image">
                  <img src={item.img} />
                </div>
                <div className="covered-card">
                  <h3 className="slider-text__heading">{item.textHeading}</h3>
                  <p className="slider-text__paragraph">{item.textParagraph}</p>
                  <Link className="link-icons">
                    {item.icon}
                    {item.link}
                  </Link>
                  <button className="booking-food">Book Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SliderProducts;
