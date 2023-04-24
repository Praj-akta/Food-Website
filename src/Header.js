import React from "react";
import Navbar from "./Navbar";
import heroIcon from "./assets/images/hero-icon.png";
import heroSlider1 from "./assets/images/hero-slider-1.jpg";
import "./assets/css/style.css";

function Header() {
  // Tesha patel
  return (
    <div className="web-header">
      <Navbar />
      <section className="hero text-center" aria-label="home" id="home">
        <ul className="hero-slider" data-hero-slider>
          <li className="slider-item active" data-hero-slider-item>
            <div className="slider-bg">
              <img
                src={heroSlider1}
                width="1880"
                height="950"
                alt=""
                className="img-cover"
              />
            </div>

            <p className="label-2 section-subtitle slider-reveal">
              Tradational & Hygine
            </p>

            <h1 className="display-1 hero-title slider-reveal">
              For the love of <br />
              delicious food
            </h1>

            <p className="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>

            <a href="/" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>

              <span className="text text-2" aria-hidden="true">
                View Our Menu
              </span>
            </a>
          </li>
        </ul>

        <button
          className="slider-btn prev"
          aria-label="slide to previous"
          data-prev-btn
        >
          <ion-icon name="chevron-back"></ion-icon>
        </button>

        <button
          className="slider-btn next"
          aria-label="slide to next"
          data-next-btn
        >
          <ion-icon name="chevron-forward"></ion-icon>
        </button>

        <a href="/" className="hero-btn has-after">
          <img src={heroIcon} width="48" height="48" alt="booking icon" />

          <span className="label-2 text-center span">Book A Table</span>
        </a>
      </section>
    </div>
  );
}

export default Header;
