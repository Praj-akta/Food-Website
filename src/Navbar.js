import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.png";
import "./assets/css/style.css";

function Navbar() {
  return (
    <div>
      <div className="topbar">
        <div className="container">
          <address className="topbar-item">
            <div className="icon">
              <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">
              Restaurant St, Delicious City, London 9578, UK
            </span>
          </address>

          <div className="separator"></div>

          <div className="topbar-item item-2">
            <div className="icon">
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">Daily : 8.00 am to 10.00 pm</span>
          </div>

          <a href="tel:+11234567890" className="topbar-item link">
            <div className="icon">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">+1 123 456 7890</span>
          </a>

          <div className="separator"></div>

          <a href="mailto:booking@restaurant.com" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>

            <span className="span">booking@restaurant.com</span>
          </a>
        </div>
      </div>

      <header className="header" data-header>
        <div className="container">
          <Link to="/" className="logo">
            <img
              src={logo}
              width="160"
              height="50"
              alt="bonefiss grill - Home"
            />
          </Link>

          <nav className="navbar" data-navbar>
            <button className="close-btn" aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>

            <Link to="/" className="logo">
              <img
                src={logo}
                width="160"
                height="50"
                alt="bonefiss grill - Home"
              />
            </Link>

            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/" className="navbar-link hover-underline active">
                  <div className="separator"></div>
                  <span className="span">Home</span>
                </Link>
              </li>

              <li className="navbar-item">
                <Link to="/about" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">About Us</span>
                </Link>
              </li>

              <li className="navbar-item">
                <Link to="/specials" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Specials</span>
                </Link>
              </li>

              <li className="navbar-item">
                <Link to="/menu" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Menus</span>
                </Link>
              </li>

              <li className="navbar-item">
                <Link to="/contact" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Contact</span>
                </Link>
              </li>
            </ul>

            <div className="text-center">
              <p className="headline-1 navbar-title">Visit Us</p>

              <address className="body-4">
                Restaurant St, Delicious City, <br />
                London 9578, UK
              </address>

              <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>

              <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">
                booking@grilli.com
              </a>

              <div className="separator"></div>

              <p className="contact-label">Booking Request</p>

              <a
                href="tel:+88123123456"
                className="body-1 contact-number hover-underline"
              >
                +88-123-123456
              </a>
            </div>
          </nav>

          <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
