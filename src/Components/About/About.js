import React from "react";
import { Section, Div } from "./AboutStyle";
import aboutImage from "../images/about-img.png";
function About() {
  return (
    <Section id="about">
      <Div className="container">
        <Div className="row">
          <Div className="col-md-6">
            <Div className="img-box">
              <img src={aboutImage} alt="aboutImage" />
            </Div>
          </Div>
          <Div className="col-md-6 text-container">
            <Div className="details-box">
              <Div className="heading-about">
                <h2>We Are Restourant</h2>
              </Div>
              <p>
                "There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All"
              </p>
              <Div className="btn-box">
                <a href="/">Read More</a>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Section>
  );
}

export default About;
