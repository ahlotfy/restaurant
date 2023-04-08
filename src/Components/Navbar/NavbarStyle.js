import styled from "@emotion/styled";
const Header = styled.header`
  position: relative;
`;
const Nav = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  position: absoluate;
  z-index: 10;
  margin-top: 15px;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
  .navbar-links {
    display: flex;
    flex-basis: 100%;
    justify-content: space-evenly;
    @media (max-width: 1200px) {
      padding-top: 15px;
      max-height: 0px;
      overflow: hidden;
      transition: max-height 0.5s ease-out;
    }
  }
`;
const Link = styled.a`
  &.navbar-logo {
    font-size: 30px;
    font-family: var(--mainFontFamily);
    &::first-letter {
      color: var(--mainColor);
      font-size: 30px;
    }
    &:hover {
      color: var(--hoverColor);
    }
  }
`;
const Input = styled.input`
  &[id="bar-toggle"]:checked + .bar-icon + .navbar-links {
    max-height: 650px;
  }
  &[id="bar-toggle"]:checked + .bar-icon {
    transform: rotate(360deg);
  }
  &[id="bar-toggle"]:checked + .bar-icon span {
    transform: rotate(45deg);
  }
  &[id="bar-toggle"]:checked + .bar-icon span::before {
    transform: rotate(90deg);
    top: 0;
  }
  &[id="bar-toggle"]:checked + .bar-icon span::after {
    transform: rotate(90deg);
    top: 0;
  }
`;
const Label = styled.label`
  &.bar-icon {
    display: none;
    padding-top: 5px;
    transition: transform 0.5s;
    transform: rotate(0deg);
    cursor: pointer;
    @media (max-width: 1200px) {
      display: block;
    }
    & span {
      display: inline-block;
      width: 35px;
      height: 4px;
      margin: 7px 0;
      position: relative;
      border-radius: 5px;
      background-color: white;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        top: -10px;
        border-radius: 5px;
        transition: transform 0.5s;
        background-color: var(--white);
      }
      &:after {
        content: "";
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        top: 10px;
        border-radius: 5px;
        transition: transform 0.5s;
        background-color: var(--white);
      }
    }
  }
`;
const Ul = styled.ul`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  align-items: baseline;
  @media (max-width: 1200px) {
    display: block;
  }
  a {
    margin: 0px 15px;
    font-size: 18px;
    &.active {
      color: var(--mainColor);
    }
    :hover {
      color: var(--hoverColor);
    }
  }
  i {
    cursor: pointer;
    margin: 0 10px;
    :hover {
      color: var(--hoverColor);
    }
    &.fa-cart-shopping {
      position: relative;
      span {
        bottom: -16px;
        right: -18px;
      }
    }
  }
  li {
    @media (max-width: 1200px) {
      padding: 15px 0px;
    }
  }
`;
const Button = styled.button`
  padding: 5px 15px;
  font-size: 18px;
  background: var(--mainColor);
  border-radius: 25px;
  @media (max-width: 1200px) {
    margin-top: 10px;
  }
  :hover {
    background: var(--hoverColor);
  }
`;
export { Header, Nav, Link, Input, Label, Ul, Button };
