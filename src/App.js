import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Specials from "./Specials";
import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import "./assets/css/style.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/about"
          exact
          element={
            <React.Fragment>
              <Navbar />
              <About _class="space" />
            </React.Fragment>
          }
        />
        <Route
          path="/menu"
          exact
          element={
            <React.Fragment>
              <Navbar />
              <Menu _class="space" />
            </React.Fragment>
          }
        />
        <Route
          path="/specials"
          exact
          element={
            <React.Fragment>
              <Navbar />
              <Specials _class="space" />
            </React.Fragment>
          }
        />
        <Route path="/contact" exact element={
          <React.Fragment>
            <Navbar />
            <Contact _class="space" />
          </React.Fragment>
        } />
      </Routes>
      {/* #BACK TO TOP */}
      <a
        href="#top"
        class="back-top-btn active"
        aria-label="back to top"
        data-back-top-btn
        alt=""
      >
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
    </div>
  );
}

export default App;
