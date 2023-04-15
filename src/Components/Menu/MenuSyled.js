import styled from "@emotion/styled";

const Div = styled.div`
  &.cart-icon {
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
    position: fixed;
    right: 25px;
    top: 20px;
    width: 60px;
    height: 58px;
    border-radius: 50%;
    background-color: var(--mainColor);
    box-shadow: 0px 0px 8px 0px black;
    font-size: 20px;
    cursor: pointer;
    :hover {
      background-color: var(--hoverColor);
    }
    span {
      bottom: -4px;
      right: -10px;
    }
  }
  & .menulist {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    column-gap: 50px;
    margin-bottom: 40px;
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 540px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
const Ul = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  & label {
    padding: 10px 25px;
    cursor: pointer;
  }
`;
const Input = styled.input`
  display: none;
  &:checked[name="filter"] + label {
    background: var(--secondColor);
    color: white;
    border-radius: 25px;
  }
`;
export { Div, Ul, Input };
