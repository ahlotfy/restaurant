import React from "react";
import HeroBg from "../images/hero-bg.jpg";
import Navbar from "../Navbar/Navbar";
import SliderSection from "./Slider/SliderSection";
import Offers from "../Offers/Offers";
import { Div, Img } from "./HomeStyle";
function Home() {
  return (
    <>
      <Div id="home" className="HomeArea">
        <Div className="bg-box">
          <Img src={HeroBg} alt="HeroBg" />
        </Div>
        <Navbar />
        <SliderSection />
      </Div>
      <Offers />
    </>
  );
}

export default Home;
