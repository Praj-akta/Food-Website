import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.png";
import "./assets/css/style.css";

function Navbar() {
  return (
    <div>
      <div class="topbar">
        <div class="container">
          <address class="topbar-item">
            <div class="icon">
              <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
            </div>

            <span class="span">
              Restaurant St, Delicious City, London 9578, UK
            </span>
          </address>

          <div class="separator"></div>

          <div class="topbar-item item-2">
            <div class="icon">
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
            </div>

            <span class="span">Daily : 8.00 am to 10.00 pm</span>
          </div>

          <a href="tel:+11234567890" class="topbar-item link">
            <div class="icon">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
            </div>

            <span class="span">+1 123 456 7890</span>
          </a>

          <div class="separator"></div>

          <a href="mailto:booking@restaurant.com" class="topbar-item link">
            <div class="icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>

            <span class="span">booking@restaurant.com</span>
          </a>
        </div>
      </div>

      <header class="header" data-header>
        <div class="container">
          <Link to="/" class="logo">
            <img
              src={logo}
              width="160"
              height="50"
              alt="bonefiss grill - Home"
            />
          </Link>

          <nav class="navbar" data-navbar>
            <button class="close-btn" aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>

            <Link to="/" class="logo">
              <img
                src={logo}
                width="160"
                height="50"
                alt="bonefiss grill - Home"
              />
            </Link>

            <ul class="navbar-list">
              <li class="navbar-item">
                <Link to="/" class="navbar-link hover-underline active">
                  <div class="separator"></div>
                  <span class="span">Home</span>
                </Link>
              </li>

              <li class="navbar-item">
                <Link to="/about" class="navbar-link hover-underline">
                  <div class="separator"></div>
                  <span class="span">About Us</span>
                </Link>
              </li>

              <li class="navbar-item">
                <Link to="/specials" class="navbar-link hover-underline">
                  <div class="separator"></div>
                  <span class="span">Specials</span>
                </Link>
              </li>

              <li class="navbar-item">
                <Link to="/menu" class="navbar-link hover-underline">
                  <div class="separator"></div>
                  <span class="span">Menus</span>
                </Link>
              </li>

              <li class="navbar-item">
                <Link to="/contact" class="navbar-link hover-underline">
                  <div class="separator"></div>
                  <span class="span">Contact</span>
                </Link>
              </li>
            </ul>

            <div class="text-center">
              <p class="headline-1 navbar-title">Visit Us</p>

              <address class="body-4">
                Restaurant St, Delicious City, <br />
                London 9578, UK
              </address>

              <p class="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>

              <a href="mailto:booking@grilli.com" class="body-4 sidebar-link">
                booking@grilli.com
              </a>

              <div class="separator"></div>

              <p class="contact-label">Booking Request</p>

              <a
                href="tel:+88123123456"
                class="body-1 contact-number hover-underline"
              >
                +88-123-123456
              </a>
            </div>
          </nav>

          <div class="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
