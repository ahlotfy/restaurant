import React from "react";
import { Div, Span, Img } from "./MenuListStyled";
import formatCurrency from "../formatCurrency";
import { useShoppingContext } from "../../Context/ShoppingContext";
const MenuList = ({ id, name, para, img, price, discount }) => {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = useShoppingContext();
  const quantity = getItemsQuantity(id);
  return (
    <>
      <Div
        className="box"
        key={id}
        id={`off${id}`}
        style={{
          boxShadow: discount
            ? "0px 0px 10px 0px red"
            : " 0px 0px 6px 0px black",
        }}
      >
        <Div className="img-box">
          <Img src={img} alt={name} />
        </Div>
        <Div className="caption">
          <Div className="title-box">
            <h3>Delicious Pizza</h3>
            <p>{para}</p>
          </Div>
          <Div className="details-box">
            <Div className="price">
              {discount ? (
                <Span style={{ textDecoration: "line-through", color: "red" }}>
                  {formatCurrency(discount)}
                </Span>
              ) : (
                ""
              )}
              <br />
              <Span>{formatCurrency(price)}</Span>
            </Div>
            {quantity >= 1 ? (
              <Div className="quantity">
                <button onClick={() => decreaseCartQuantity(id)}>-</button>
                <Span>{quantity}</Span>
                <button onClick={() => increaseCartQuantity(id)}>+</button>
                <Div className="remove-btn">
                  <button
                    className="rectangular-btn"
                    onClick={() => removeItemFromCart(id)}
                  >
                    Remove
                  </button>
                </Div>
              </Div>
            ) : (
              <button
                className="rectangular-btn add-cart"
                onClick={() => increaseCartQuantity(id)}
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            )}
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default MenuList;
