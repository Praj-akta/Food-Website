import React from "react";
import badge1 from "./assets/images/badge-1.png";
import shape4 from "./assets/images/shape-4.png";
import shape9 from "./assets/images/shape-9.png";
import specialDish from "./assets/images/special-dish-banner.jpg";
import "./assets/css/style.css";

function Specials({ _class }) {
  // Tesha Patel
  return (
    <div className={_class}>
      <div class="special-dish text-center">
        <div class="special-dish-banner">
          <img
            src={specialDish}
            width="940"
            height="900"
            loading="lazy"
            alt="special dish"
            class="img-cover"
          />
        </div>

        <div class="special-dish-content">
          <div class="container">
            <img
              src={badge1}
              width="28"
              height="41"
              loading="lazy"
              alt="badge"
              class="abs-img"
            />

            <p class="section-subtitle label-2">Special Dish</p>

            <h2 class="headline-1 section-title">Chicken Tortellini</h2>

            <p class="section-text">
              This Italian Chicken Tortellini is just another way to prove that
              tortellini is just that good. It's made with cheese tortellini,
              pan-seared bites of chicken, and veggies simmered in a creamy
              sauce a nd topped with mozzarella and parmesan.
            </p>

            <div class="wrapper">
              <span class="span body-1">$20.00</span>
            </div>

            <a href="/" class="btn btn-primary">
              <span class="text text-1">View All Menu</span>

              <span class="text text-2" aria-hidden="true">
                View All Menu
              </span>
            </a>
          </div>
        </div>

        <img
          src={shape4}
          width="179"
          height="359"
          loading="lazy"
          alt=""
          class="shape shape-1"
        />

        <img
          src={shape9}
          width="351"
          height="462"
          loading="lazy"
          alt=""
          class="shape shape-2"
        />
      </div>
    </div>
  );
}

export default Specials;
