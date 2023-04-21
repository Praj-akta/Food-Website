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
      <div class="section service text-center about-container">
        <div class="container">
          <p class="section-subtitle label-2">Flavors For Royalty</p>

          <h2 class="headline-1 section-title">What we offer</h2>

          <p class="section-text">
            Tasty delicious food with variety of options in breakfast, 
            brunch, lunch and dinner. Also we have special drinks that everyone requires.
          </p>

          <ul class="grid-list">
            <li>
              <div class="service-card">
                <a href="/" class="has-before hover:shine">
                  <figure class="card-banner">
                    <img
                      src={service1}
                      loading="lazy"
                      alt="Breakfast"
                      class="img-cover"
                    />
                  </figure>
                </a>

                <div class="card-content">
                  <h3 class="title-4 card-title">
                    <a href="/">Breakfast</a>
                  </h3>

                  <a href="/" class="btn-text hover-underline label-2">
                    View Menu
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div class="service-card">
                <a href="/" class="has-before hover:shine">
                  <figure class="card-banner">
                    <img
                      src={service2}
                      loading="lazy"
                      alt="Appetizers"
                      class="img-cover"
                    />
                  </figure>
                </a>

                <div class="card-content">
                  <h3 class="title-4 card-title">
                    <a href="/">Appetizers</a>
                  </h3>

                  <a href="/" class="btn-text hover-underline label-2">
                    View Menu
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div class="service-card">
                <a href="/" class="has-before hover:shine">
                  <figure class="card-banner">
                    <img
                      src={service3}
                      loading="lazy"
                      alt="Drinks"
                      class="img-cover"
                    />
                  </figure>
                </a>

                <div class="card-content">
                  <h3 class="title-4 card-title">
                    <a href="/">Drinks</a>
                  </h3>

                  <a href="/" class="btn-text hover-underline label-2">
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
            class="shape shape-1 move-anim"
          />
          <img
            src={shape2}
            width="343"
            height="345"
            loading="lazy"
            alt="shape"
            class="shape shape-2 move-anim"
          />
        </div>
      </div>

      <div
        class="section about text-center"
        aria-labelledby="about-label"
        id="about"
      >
        <div class="container">
          <div class="about-content">
            <p class="label-2 section-subtitle" id="about-label">
              Our Story
            </p>

            <h2 class="headline-1 section-title">
              Every Flavor Tells a Story
            </h2>

            <p class="section-text">
              We started our business in 2009 and our main aim was to make
              people happy and give them a smile with the food we serve. Food is
              what gets people joyful. We have varities of dishes in veg, non-veg, 
              Appetizers, drinks, snacks, etc. As it says "Every flavour tells a story"
              and that's how our story started. Our chefs make sure they give every detailing 
              to the dishes and try to invent new dishes. Do come and visit our. See you soon.
            </p>

            <div class="contact-label">Book Through Call</div>

            <a
              href="tel:+804001234567"
              class="body-1 contact-number hover-underline"
            >
              +80 (400) 123 4567
            </a>

            <a href="/" class="btn btn-primary">
              <span class="text text-1">Read More</span>

              <span class="text text-2" aria-hidden="true">
                Read More
              </span>
            </a>
          </div>

          <figure class="about-banner">
            <img
              src={banner}
              width="570"
              height="570"
              loading="lazy"
              alt="about banner"
              class="w-100"
              data-parallax-item
              data-parallax-speed="1"
            />

            <div
              class="abs-img abs-img-1 has-before"
              data-parallax-item
              data-parallax-speed="1.75"
            >
              <img
                src={aboutImg}
                width="285"
                height="285"
                loading="lazy"
                alt=""
                class="w-100"
              />
            </div>

            <div class="abs-img abs-img-2 has-before">
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
            class="shape"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
