import React, { useRef, useState } from "react";
import { Div, Input, Ul } from "./MenuSyled";
import MenuData from "../../Data/MenuData.json";
import MenuList from "./MenuList";
import { useShoppingContext } from "../../Context/ShoppingContext";
const Menu = () => {
  const { openCart, cartQuantity } = useShoppingContext();
  const quantity = cartQuantity;
  const [showItem, setShowItem] = useState(MenuData);
  const cartIcon = useRef();
  const changeItems = (type) => {
    setShowItem(() => {
      if (type === "all") {
        return MenuData;
      } else {
        return MenuData.filter((items) => items.type === type);
      }
    });
  };
  window.onscroll = () => {
    if (window.scrollY >= 900) {
      cartIcon.current.style.display = "flex";
    } else {
      cartIcon.current.style.display = "none";
    }
  };
  return (
    <Div id="menu">
      <Div className="cart-icon" ref={cartIcon} onClick={openCart}>
        <i className="fa-solid fa-cart-shopping">
          {quantity >= 1 ? (
            <span className="quantity-cart-value">{quantity}</span>
          ) : (
            ""
          )}
        </i>
      </Div>
      <Div className="container">
        <Div className="heading">
          <h2>Our Menu</h2>
        </Div>
        <Div className="filtering">
          <Ul>
            <Input type="radio" name="filter" id="radio1" defaultChecked />
            <label htmlFor="radio1" onClick={() => changeItems("all")}>
              All
            </label>
            <Input type="radio" name="filter" id="radio2" />
            <label htmlFor="radio2" onClick={() => changeItems("burgar")}>
              Burgar
            </label>
            <Input type="radio" name="filter" id="radio3" />
            <label htmlFor="radio3" onClick={() => changeItems("pizza")}>
              Pizza
            </label>
            <Input type="radio" name="filter" id="radio4" />
            <label htmlFor="radio4" onClick={() => changeItems("pasta")}>
              Pasta
            </label>
            <Input type="radio" name="filter" id="radio5" />
            <label htmlFor="radio5" onClick={() => changeItems("fries")}>
              Fries
            </label>
          </Ul>
        </Div>
        <Div className="menulist">
          {showItem.map((item) => (
            <MenuList key={item.id} {...item} />
          ))}
        </Div>
      </Div>
    </Div>
  );
};

export default Menu;
