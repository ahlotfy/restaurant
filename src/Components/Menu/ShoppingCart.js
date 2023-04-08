import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingContext } from "../../Context/ShoppingContext";
import CartItems from "./CartItems";
import formatCurrency from "../formatCurrency";
import MenuData from "../../Data/MenuData.json";
const ShoppingCart = ({ isOpen }) => {
  const { cartItems, closeCart } = useShoppingContext();
  return (
    <div>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => {
              return <CartItems key={item.id} {...item} />;
            })}
          </Stack>
          <div className="total mt-4" dir="rtl">
            <h3>
              Total {""}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = MenuData.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </h3>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default ShoppingCart;
