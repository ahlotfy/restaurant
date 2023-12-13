import styled from "@emotion/styled";
const Div = styled.div`
  &.container {
    display: flex;
    flex: 1;
    align-items: center;
  }
  &.main-slide {
    display: flex;
    position: relative;
    padding: 20px 0 60px 0;
  }
  & .slide {
    & .carousel-indicators {
      display: flex;
      justify-content: flex-start;
      margin: 0;
      margin-bottom: 20px;
      align-items: center;
      @media (max-width: 576px) {
        justify-content: center;
      }
      & button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: none;
        &.active {
          width: 20px;
          height: 20px;
          background: var(--mainColor);
        }
      }
    }
    & .caption {
      width: 60%;
      margin-bottom: 120px;
      color: var(--white);
      @media (max-width: 576px) {
        display: inline-block;
        text-align: center;
        width: 100%;
      }
    }
  }
`;
const H1 = styled.h1`
  font-family: var(--mainFontFamily);
  font-size: 45px;
`;
const P = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;
const A = styled.a`
  display: inline-block;
  padding: 8px 25px;
  font-size: 20px;
  background: var(--mainColor);
  margin-top: 20px;
  border-radius: 25px;
  :hover {
    background: var(--hoverColor);
    color: var(--white);
  }
`;
export { Div, H1, P, A };
