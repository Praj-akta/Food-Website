import React from "react";
import Menu from "./Menu";
import About from "./About";
import Header from "./Header";
import Specials from "./Specials";
import Contact from "./Contact";
import Footer from "./Footer";
import "./assets/css/style.css";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Specials />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
