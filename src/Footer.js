import React from "react";
import logo from "./assets/images/logo.png";
import "./assets/css/style.css";

function Footer() {
  // Neel Gajera
  return (
    <div>
      <footer class="footer section has-bg-image text-center">
        <div class="container">
          <div class="footer-top grid-list">
            <div class="footer-brand has-before has-after">
              <a href="/" class="logo">
                <img
                  src={logo}
                  width="160"
                  height="50"
                  loading="lazy"
                  alt="bonefish grill home"
                />
              </a>

              <address class="body-4">
                Restaurant St, Delicious City, London 9578, UK
              </address>

              <a href="mailto:booking@grilli.com" class="body-4 contact-link">
                booking@grilli.com
              </a>

              <a href="tel:+88123123456" class="body-4 contact-link">
                Booking Request : +88-123-123456
              </a>

              <p class="body-4">Open : 09:00 am - 01:00 pm</p>

              <div class="wrapper">
                <div class="separator"></div>
                <div class="separator"></div>
                <div class="separator"></div>
              </div>

              <p class="title-1">Get News & Offers</p>

              <p class="label-1">
                Subscribe us & Get <span class="span">25% Off.</span>
              </p>

              <form action="" class="input-wrapper">
                <div class="icon-wrapper">
                  <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                  <input
                    type="email"
                    name="email_address"
                    placeholder="Your email"
                    autocomplete="off"
                    class="input-field"
                  />
                </div>

                <button type="submit" class="btn btn-secondary">
                  <span class="text text-1">Subscribe</span>

                  <span class="text text-2" aria-hidden="true">
                    Subscribe
                  </span>
                </button>
              </form>
            </div>

            <ul class="footer-list">
              <li>
                <a href="/" class="label-2 footer-link hover-underline">
                  Home
                </a>
              </li>

              <li>
                <a href="/" class="label-2 footer-link hover-underline">
                  Menus
                </a>
              </li>

              <li>
                <a href="/" class="label-2 footer-link hover-underline">
                  About Us
                </a>
              </li>

              <li>
                <a href="/" class="label-2 footer-link hover-underline">
                  Our Chefs
                </a>
              </li>

              <li>
                <a href="/" class="label-2 footer-link hover-underline">
                  Contact
                </a>
              </li>
            </ul>

            <ul class="footer-list">
              <li>
                <a href="/" class="label-2 footer-link hover-underline">
                  Facebook
                </a>
              </li>

              <li>
                <a href="/" class="label-2 footer-link hover-underline">
                  Instagram
                </a>
              </li>

              <li>
                <a href="/" class="label-2 footer-link hover-underline">
                  Twitter
                </a>
              </li>

              <li>
                <a href="/" class="label-2 footer-link hover-underline">
                  Youtube
                </a>
              </li>

              <li>
                <a href="/" class="label-2 footer-link hover-underline">
                  Google Map
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-bottom">
            <p class="copyright">&copy; 2023 Bonefish Grill. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;