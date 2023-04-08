import styled from "@emotion/styled";

const Div = styled.div`
  &.img-box-cart {
    width: 120px;
    padding: 10px;
    background-color: var(--thirdyColor);
    @media (max-width: 540px) {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    img {
      width: 100px;
      height: 90px;
      object-fit: contain;
    }
  }
  &.details-box-cart {
    display: flex;
    padding: 10px;
    align-items: center;
    flex: 1;
    @media (max-width: 540px) {
      flex-direction: column;
    }
    .title-box-cart {
      margin-right: auto;
      padding: 10px;
    }
    .quantity-box-cart,
    .price-box-cart {
      font-size: 1.3rem;
    }
    .price-box-cart {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      h5 {
        margin: 0;
      }
    }
  }
`;
export { Div };
