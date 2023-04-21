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
      <section class="hero text-center" aria-label="home" id="home">
        <ul class="hero-slider" data-hero-slider>
          <li class="slider-item active" data-hero-slider-item>
            <div class="slider-bg">
              <img
                src={heroSlider1}
                width="1880"
                height="950"
                alt=""
                class="img-cover"
              />
            </div>

            <p class="label-2 section-subtitle slider-reveal">
              Tradational & Hygine
            </p>

            <h1 class="display-1 hero-title slider-reveal">
              For the love of <br />
              delicious food
            </h1>

            <p class="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>

            <a href="/" class="btn btn-primary slider-reveal">
              <span class="text text-1">View Our Menu</span>

              <span class="text text-2" aria-hidden="true">
                View Our Menu
              </span>
            </a>
          </li>
        </ul>

        <button
          class="slider-btn prev"
          aria-label="slide to previous"
          data-prev-btn
        >
          <ion-icon name="chevron-back"></ion-icon>
        </button>

        <button
          class="slider-btn next"
          aria-label="slide to next"
          data-next-btn
        >
          <ion-icon name="chevron-forward"></ion-icon>
        </button>

        <a href="/" class="hero-btn has-after">
          <img src={heroIcon} width="48" height="48" alt="booking icon" />

          <span class="label-2 text-center span">Book A Table</span>
        </a>
      </section>
    </div>
  );
}

export default Header;