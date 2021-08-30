import React from "react";
import { FaApple, FaGooglePlay, } from "react-icons/fa";
import PhoneImg from "./images/phone.png";
import "./DownloadApp.css";
import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    <>
      <div className="download-app-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="download-text">
                <h2>Download app for Exciting Deals</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
                  adipiscing cursus auctor eget sed phasellus senectus. Ut
                  tellus donec vestibulum tristique leo bibendum in a,
                  tincidunt.
                </p>
                <Link to='/downloadApp'>
                  <button className="download-button">
                    <FaGooglePlay className="icon-download" />
                    Google Play
                  </button>
                </Link>
                <Link to='downloadApp'>
                  <button className="download-button">
                    <FaApple className="icon-download" />
                    App Store
                  </button>
                </Link>
              </div>
            </div>
            <div className="col download-app__right-col">
              <div className="download-phone-image">
                <img className="download-phone__image" src={PhoneImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
