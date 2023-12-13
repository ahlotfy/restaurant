import styled from "@emotion/styled";

const Footer = styled.footer`
  background-color: var(--secondColor);
  color: var(--white);
  padding: 75px 0 40px 0;
  text-align: center;
  .footer-contact {
    a {
      padding: 5px 0;
    }
  }
  h4 {
    font-size: 25px;
    font-weight: bold;
    font-family: var(--mainFontFamily);
    margin-bottom: 20px;
  }
  .footer-logo {
    h4 {
      &::first-letter {
        color: var(--mainColor);
        font-size: 30px;
      }
      &:hover {
        color: var(--hoverColor);
      }
    }
  }
  span {
    font-size: 12px;
  }
  p {
    font-size: 14px;
  }
  i {
    margin: 0px 5px;
  }
`;
const Div = styled.div`
  .f-column {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .footer-social {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 10px;
    a {
      width: 27px;
      height: 26px;
      border-radius: 100%;
      margin: 0 3px;
      font-size: 17px;
      i {
        :hover {
          color: var(--hoverColor);
        }
      }
    }
  }
  .footer-info {
    padding-top: 20px;
  }
`;
export { Footer, Div };
