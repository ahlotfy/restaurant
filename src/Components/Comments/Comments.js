import { Carousel } from "react-bootstrap";
import React from "react";
import clientOne from "../images/client1.jpg";
import clientTwo from "../images/client2.jpg";
import clientThree from "../images/client3.jpg";
import clientFour from "../images/client4.jpg";
import { Section, Div } from "./CommentsStyle";
function Comments() {
  return (
    <Section>
      <Div className="container">
        <Div className="heading-commnet">
          <h2>What Says Our Customers</h2>
        </Div>
        <Carousel className="slide">
          <Carousel.Item className="content">
            <Div className="row">
              <Div className="col-md-6">
                <Div className="box">
                  <Div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>Moana Michell</h6>
                  </Div>
                  <Div className="img-box">
                    <Div className="handle-img">
                      <img src={clientOne} alt="client" />
                    </Div>
                  </Div>
                </Div>
              </Div>
              <Div className="col-md-6">
                <Div className="box">
                  <Div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>Moana Michell</h6>
                  </Div>
                  <Div className="img-box">
                    <Div className="handle-img">
                      <img src={clientTwo} alt="client" />
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Div>
          </Carousel.Item>
          <Carousel.Item className="content">
            <Div className="row">
              <Div className="col-md-6">
                <Div className="box">
                  <Div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>Moana Michell</h6>
                  </Div>
                  <Div className="img-box">
                    <Div className="handle-img">
                      <img src={clientThree} alt="client" />
                    </Div>
                  </Div>
                </Div>
              </Div>
              <Div className="col-md-6">
                <Div className="box">
                  <Div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>Moana Michell</h6>
                  </Div>
                  <Div className="img-box">
                    <Div className="handle-img">
                      <img src={clientFour} alt="client" />
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Div>
          </Carousel.Item>
        </Carousel>
      </Div>
    </Section>
  );
}

export default Comments;
