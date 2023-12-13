import styled from "@emotion/styled";

const Section = styled.section`
  padding: 90px 0;
`;
const Div = styled.div`
  .heading_book {
    margin-bottom: 25px;
    h2 {
      font-family: var(--mainFontFamily);
    }
  }
  .googleMap {
    width: 400px;
    height: 350px;
    border: none;
  }
  .form-container {
    margin-bottom: 50px;
    [type="submit"] {
      display: inline-block;
      padding: 4px 30px;
      font-size: 20px;
      background: var(--mainColor);
      color: var(--white);
      border: none;
      margin-top: 20px;
      border-radius: 25px;
      :hover {
        background: var(--hoverColor);
      }
    }
  }
  .googleMap {
    width: 100%;
    height: 350px;
    border: none;
    iframe {
      width: 100%;
    }
  }
`;
const Form = styled.form`
  div {
    input,
    select {
      width: 100%;
      height: 50px;
      margin-bottom: 25px;
      padding: 0 10px;
      border: 1px solid #999;
      outline: none;
      color: #000000;
      border-radius: 5px;
    }
  }
`;
export { Section, Div, Form };
