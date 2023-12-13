import styled from "@emotion/styled";
const Div = styled.div`
  &.row {
    padding: 80px 0;
    .offer-box {
      display: flex;
      justify-content: center;
    }
  }
  &.css-526rbi {
    margin: 0;
  }
  &.box {
    padding: 30px 20px;
    background-color: var(--secondColor);
    display: flex;
    color: white;
    align-items: center;
    width: 100%;
    margin-top: 45px;
    border-radius: 10px;
    @media (max-width: 992px) {
      flex-direction: column;
    }
    @media (max-width: 768px) {
      flex-direction: row;
    }
    @media (max-width: 576px) {
      flex-direction: column;
      width: fit-content;
      margin-top: 45px;
    }
    &.box:hover .img-box img {
      transition: transform 0.5s ease;
      transform: scale(1.1);
    }
  }
  &.img-box {
    border-radius: 50%;
    border: 5px solid var(--mainColor);
    background-color: var(--thirdyColor);
    padding: 0px;
    width: 200px;
    height: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: auto;
  }
  &.detail-box {
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 20px;
    h5 {
      font-family: var(--mainFontFamily);
      font-size: 24px;
      margin: 0;
    }
    h1 {
      font-family: var(--mainFontFamily);
      margin: 10px 0;
      span {
        font-size: 22px;
      }
    }
    a {
      display: inline-block;
      padding: 6px 18px;
      background-color: var(--mainColor);
      border-radius: 45px;
      transition: all 0.3s;
      font-size: 18px;
      :hover {
        background-color: var(--hoverColor);
      }
      i {
        margin: 0px 10px;
      }
    }
  }
`;
const Img = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;
export { Div, Img };
