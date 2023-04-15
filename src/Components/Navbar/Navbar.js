import { useLocation } from "react-router-dom";
import { useContextForm } from "../../Context/ContextAPIForm";
import { useShoppingContext } from "../../Context/ShoppingContext";
import { Nav, Link, Label, Ul, Button, Header, Input } from "./NavbarStyle";
import Container from "react-bootstrap/Container";
function Navbar() {
  const { cartQuantity, openCart } = useShoppingContext();
  const quantity = cartQuantity;
  const location = useLocation();
  const { activeAccount } = useContextForm();

  return (
    <Header>
      <Container>
        <Nav>
          <Link href="/" className="navbar-logo">
            <span>Restaurant</span>
          </Link>
          <Input
            type="checkbox"
            id="bar-toggle"
            name="check1"
            className="d-none"
          />
          <Label className="bar-icon" htmlFor="bar-toggle">
            <span></span>
          </Label>
          <div className="navbar-links">
            <Ul className="links">
              <li>
                <Link className="active" href="#home">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="#menu">MENU</Link>
              </li>
              <li>
                <Link href="#about">ABOUT</Link>
              </li>
              <li>
                <Link href="#book_table">BOOKTABLE</Link>
              </li>
              <li>
                <a
                  href={
                    activeAccount.email === undefined ? "/login" : "/profile"
                  }
                >
                  <i className="fa-solid fa-user"> </i>
                </a>
                <i onClick={openCart} className="fa-solid fa-cart-shopping">
                  {quantity >= 1 && (
                    <span className="quantity-cart-value">{quantity}</span>
                  )}
                </i>
              </li>
              <Button>Order Online</Button>
            </Ul>
          </div>
        </Nav>
      </Container>
    </Header>
  );
}

export default Navbar;
