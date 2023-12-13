import React from "react";
import MenuData from "../../Data/MenuData.json";
import { Div, Img } from "./OffersStyle";
function Offers() {
  const item = MenuData.filter((item) =>
    item.discount ? [{ id: item.id, discount: item.discount }] : null
  );
  return (
    <Div className="container">
      <Div className="row">
        {item.map((item) => {
          return (
            <Div className="col-md-6 offer-box" key={item.id}>
              <Div className="box">
                <Div className="img-box">
                  <Img src={item.img} alt={item.name} />
                </Div>
                <Div className="detail-box">
                  <h5>{item.name}</h5>
                  <h1>
                    {item.offer}% <span>Off</span>
                  </h1>
                  <a href={`#off${item.id}`}>
                    Order Now
                    <i className="fa-solid fa-cart-shopping" />
                  </a>
                </Div>
              </Div>
            </Div>
          );
        })}
      </Div>
    </Div>
  );
}

export default Offers;
