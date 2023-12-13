import React from "react";
import { Section, Div, Form } from "./BookStyle";
function Book() {
  let today = new Date().toISOString().split("T")[0];
  return (
    <Section id="book_table">
      <Div className="container">
        <Div className="heading_book">
          <h2>Book A Table</h2>
        </Div>
        <Div className="row">
          <Div className="col-md-6">
            <Div className="form-container">
              <Form>
                <Div>
                  <input type="text" placeholder="Your Name" />
                </Div>
                <Div>
                  <input type="text" placeholder="Phone Number" />
                </Div>
                <Div>
                  <input type="Email" placeholder="Your Email" />
                </Div>
                <Div>
                  <select placeholder="How Many Persons?">
                    <option disabled>How Many Persons?</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </Div>
                <Div>
                  <input type="date" name="bdate" min={today} />
                </Div>
                <input href="/" type="submit" value="Book Now" />
              </Form>
            </Div>
          </Div>
          <Div className="col-md-6">
            <Div className="map-container">
              <Div className="googleMap">
                <Div>
                  <iframe
                    title="s"
                    src="https://google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.0526030425817!2d31.25955371550079!3d30.064026624601354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841bc6dc55755%3A0xc86b6e202be59a2e!2sResturant!5e0!3m2!1sen!2seg!4v1679171409281!5m2!1sen!2seg "
                    height="350"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Section>
  );
}

export default Book;
