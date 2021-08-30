import React from "react";
import {
  FaArrowAltCircleRight,
  FaFacebook,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-section">
        <div className="container">
          <div className="text-heading">
            <h1>Get notified about new amazing products</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
              adipiscing cursus auctor eget sed phasellus senectus.{" "}
            </p>
          </div>
          <div className="form">
            <form>
              <input
                className="contact-input"
                type="email"
                placeholder="E-mail"
              />
              <button className="arrow-button" type="submit">
                <FaArrowAltCircleRight className="arrow-icon" />
              </button>
            </form>
          </div>
          <div className="other-links">
            <ul>
              <li>
                <Link>Product</Link>
              </li>
              <li>
                <Link>Company</Link>
              </li>
              <li>
                <Link>Learn More</Link>
              </li>
              <li>
                <Link>Get In Touch</Link>
              </li>
            </ul>
          </div>
          <footer>
            <div className="footer">
              <div className="social-media">
                <ul>
                  <li>
                    <Link>
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaTelegram />
                    </Link>
                  </li>
                </ul>
              </div>
              <p>&copy; VaxobjanoDev for Expice Studio</p>
            </div>
          </footer>
        </div>
      </div>
    </>
    
  );
};

export default Contact;
