import React from "react";
import PropTypes from "prop-types";
import "./Hero.css";

const HeroImage = "https://source.unsplash.com/random/2000x860/?cute,shop";
const Hero = ({ merchant }) => (
  <div
    className="hero img hero-img"
    style={{
      backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.2)), url(${HeroImage})`,
    }}
  >
    <div className="hero__text">
      <h1>{merchant.business_name}</h1>
      <a href="#products" className="btn btn--primary">
        Shop
      </a>
    </div>
  </div>
);

Hero.propTypes = {
  merchant: PropTypes.object,
};

export default Hero;
