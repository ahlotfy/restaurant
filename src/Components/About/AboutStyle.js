import styled from "@emotion/styled";

const Section = styled.section`
  background: var(--secondColor);
  color: var(--white);
  padding: 90px 0;
`;
const Div = styled.div`
  .row {
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }
  .img-box {
    display: flex;
    position: relative;
    justify-content: center;
    margin: auto;
    img {
      width: 260px;
      height: 450px;
      @media (max-width: 768px) {
        margin-top: 60px;
      }
    }
  }
  .text-container {
    display: flex;
    align-items: center;
  }
  .details-box {
    @media (max-width: 768px) {
      text-align: center;
    }
    .heading-about {
      h2 {
        font-family: var(--mainFontFamily);
      }
    }
  }
  .btn-box {
    a {
      display: inline-block;
      padding: 2px 30px;
      font-size: 20px;
      background: var(--mainColor);
      margin-top: 20px;
      border-radius: 25px;
      :hover {
        background: var(--hoverColor);
      }
    }
  }
`;
export { Section, Div };
