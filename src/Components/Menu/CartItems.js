import React from "react";
import MenuData from "../../Data/MenuData.json";
import { Div } from "./CartItemsStyle";
import { Button, Stack } from "react-bootstrap";
import { useShoppingContext } from "../../Context/ShoppingContext";
import formatCurrency from "../formatCurrency";
const CartItems = ({ id, quantity }) => {
  const item = MenuData.find((item) => item.id === id);
  const { removeItemFromCart } = useShoppingContext();
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="box-cart">
      <Div className="img-box-cart">
        <img src={item.img} alt={item.name} />
      </Div>
      <Div className="details-box-cart">
        <Div className="title-box-cart">
          {item.name}
          <Div className="price-box-cart">
            <h5>{formatCurrency(item.price)}</h5>
            {quantity > 1 && <h5 className="quantity-box-cart">x{quantity}</h5>}
          </Div>
        </Div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeItemFromCart(id)}
        >
          &times;
        </Button>
      </Div>
    </Stack>
  );
};

export default CartItems;
