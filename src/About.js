import React from "react";
import shape1 from "./assets/images/shape-1.png";
import shape2 from "./assets/images/shape-2.png";
import badge2 from "./assets/images/badge-2.png";
import shape3 from "./assets/images/shape-3.png";
import service1 from "./assets/images/service-1.jpg";
import service2 from "./assets/images/service-2.jpg";
import service3 from "./assets/images/service-3.jpg";
import banner from "./assets/images/about-banner.jpg";
import aboutImg from "./assets/images/about-abs-image.jpg";
import "./assets/css/style.css";

function About({ _class }) {
  // Prajakta Limje
  return (
    <div className={_class}>
      <div className="section service text-center about-container">
        <div className="container">
          <p className="section-subtitle label-2">Flavors For Royalty</p>

          <h2 className="headline-1 section-title">What we offer</h2>

          <p className="section-text">
            Tasty delicious food with variety of options in breakfast, 
            brunch, lunch and dinner. Also we have special drinks that everyone requires.
          </p>

          <ul className="grid-list">
            <li>
              <div className="service-card">
                <a href="/" className="has-before hover:shine">
                  <figure className="card-banner">
                    <img
                      src={service1}
                      loading="lazy"
                      alt="Breakfast"
                      className="img-cover"
                    />
                  </figure>
                </a>

                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <a href="/">Breakfast</a>
                  </h3>

                  <a href="/" className="btn-text hover-underline label-2">
                    View Menu
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card">
                <a href="/" className="has-before hover:shine">
                  <figure className="card-banner">
                    <img
                      src={service2}
                      loading="lazy"
                      alt="Appetizers"
                      className="img-cover"
                    />
                  </figure>
                </a>

                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <a href="/">Appetizers</a>
                  </h3>

                  <a href="/" className="btn-text hover-underline label-2">
                    View Menu
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card">
                <a href="/" className="has-before hover:shine">
                  <figure className="card-banner">
                    <img
                      src={service3}
                      loading="lazy"
                      alt="Drinks"
                      className="img-cover"
                    />
                  </figure>
                </a>

                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <a href="/">Drinks</a>
                  </h3>

                  <a href="/" className="btn-text hover-underline label-2">
                    View Menu
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <img
            src={shape1}
            width="246"
            height="412"
            loading="lazy"
            alt="shape"
            className="shape shape-1 move-anim"
          />
          <img
            src={shape2}
            width="343"
            height="345"
            loading="lazy"
            alt="shape"
            className="shape shape-2 move-anim"
          />
        </div>
      </div>

      <div
        className="section about text-center"
        aria-labelledby="about-label"
        id="about"
      >
        <div className="container">
          <div className="about-content">
            <p className="label-2 section-subtitle" id="about-label">
              Our Story
            </p>

            <h2 className="headline-1 section-title">
              Every Flavor Tells a Story
            </h2>

            <p className="section-text">
              We started our business in 2009 and our main aim was to make
              people happy and give them a smile with the food we serve. Food is
              what gets people joyful. We have varities of dishes in veg, non-veg, 
              Appetizers, drinks, snacks, etc. As it says "Every flavour tells a story"
              and that's how our story started. Our chefs make sure they give every detailing 
              to the dishes and try to invent new dishes. Do come and visit our. See you soon.
            </p>

            <div className="contact-label">Book Through Call</div>

            <a
              href="tel:+804001234567"
              className="body-1 contact-number hover-underline"
            >
              +80 (400) 123 4567
            </a>

            <a href="/" className="btn btn-primary">
              <span className="text text-1">Read More</span>

              <span className="text text-2" aria-hidden="true">
                Read More
              </span>
            </a>
          </div>

          <figure className="about-banner">
            <img
              src={banner}
              width="570"
              height="570"
              loading="lazy"
              alt="about banner"
              className="w-100"
              data-parallax-item
              data-parallax-speed="1"
            />

            <div
              className="abs-img abs-img-1 has-before"
              data-parallax-item
              data-parallax-speed="1.75"
            >
              <img
                src={aboutImg}
                width="285"
                height="285"
                loading="lazy"
                alt=""
                className="w-100"
              />
            </div>

            <div className="abs-img abs-img-2 has-before">
              <img
                src={badge2}
                width="133"
                height="134"
                loading="lazy"
                alt=""
              />
            </div>
          </figure>

          <img
            src={shape3}
            width="197"
            height="194"
            loading="lazy"
            alt=""
            className="shape"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
