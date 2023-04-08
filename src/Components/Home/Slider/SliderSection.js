import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { Div, H1, P, A } from "../Slider/SliderStyle";
function SliderSection() {
  return (
    <Div className="container">
      <Div className="main-slide">
        <Carousel controls={false}>
          <Carousel.Item interval={10000}>
            <Div className="caption">
              <H1>Fast Food Restaurant</H1>
              <P>
                Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                sapiente ad mollitia laborum quam quisquam esse error unde.
                Tempora ex doloremque, labore, sunt repellat dolore, iste magni
                quos nihil ducimus libero ipsam.
              </P>
              <A href="#menu">Order Now</A>
            </Div>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <Div className="caption">
              <H1>Fast Food Restaurant</H1>
              <P>
                Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                sapiente ad mollitia laborum quam quisquam esse error unde.
                Tempora ex doloremque, labore, sunt repellat dolore, iste magni
                quos nihil ducimus libero ipsam.
              </P>
              <A href="#menu">Order Now</A>
            </Div>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <Div className="caption">
              <H1>Fast Food Restaurant</H1>
              <P>
                Doloremque, itaque aperiam facilis rerum, commodi, temporibus
                sapiente ad mollitia laborum quam quisquam esse error unde.
                Tempora ex doloremque, labore, sunt repellat dolore, iste magni
                quos nihil ducimus libero ipsam.
              </P>
              <A href="#menu">Order Now</A>
            </Div>
          </Carousel.Item>
        </Carousel>
      </Div>
    </Div>
  );
}

export default SliderSection;
