import React from "react";
import { Footer, Div } from "./FooterStyle";

function FooterSection() {
  return (
    <Footer>
      <Div className="container">
        <Div className="row">
          <Div className="col-md-4 f-column">
            <Div className="footer-contact">
              <h4>Contact Us</h4>
              <Div className="contact_link_box">
                <Div>
                  <a href="/">
                    <i className="fa-solid fa-location-dot"></i>
                    <span> Location </span>
                  </a>
                </Div>
                <Div>
                  <a href="/">
                    <i className="fa-solid fa-phone"></i>
                    <span> Call +20 1014190786 </span>
                  </a>
                </Div>
                <Div>
                  <a href="/">
                    <i className="fa-solid fa-envelope"></i>
                    <span> ahmedlotfymain@gmail.com </span>
                  </a>
                </Div>
              </Div>
            </Div>
          </Div>
          <Div className="col-md-4 f-column">
            <Div className="footer-detail">
              <a className="footer-logo" href="/">
                <h4>Restaurant</h4>
              </a>
              <p>
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with
              </p>
              <Div className="footer-social">
                <a href="/">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
              </Div>
            </Div>
          </Div>
          <Div className="col-md-4 f-column">
            <h4> Opening Hours </h4>
            <p> Everyday </p>
            <p> 10:00AM - 10:00PM </p>
          </Div>
        </Div>
        <Div className="footer-info">
          <p>
            &copy;
            <span>2023</span>
            All Rights Reserved
            <br />
            <br />
            &copy; Distributed By <a href="/">Ahmed Lotfy</a>
          </p>
        </Div>
      </Div>
    </Footer>
  );
}

export default FooterSection;
