import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
let loadingLine = keyframes`
0%{
  width: 0%;
}
25%{
  width: 50%;
}
50%{
  width: 50%;
}
75%{
  width: 50%;
}
100%{
  width: 100%;
}
`;
const Div = styled.div`
  &.account-section {
    width: 100%;
    min-height: 100vh;
    font-weight: 500;
    padding-top: 30px;
    padding-bottom: 30px;
    .box {
      margin: auto;
      max-width: 800px;
      .logo {
        @media (max-width: 576px) {
          text-align: center;
        }
        a {
          font-weight: bold;
          font-size: 50px;
          color: var(--mainColor);
          font-family: var(--mainFontFamily);
          &::first-letter {
            color: red;
            font-size: 30px;
          }
          &:hover {
            color: var(--hoverColor);
          }
        }
      }
    }
    .error {
      font-weight: bold;
      color: red;
      padding: 5px 0;
    }
  }
  &.account-form {
    border: 1px solid #bdbcbc;
    border-radius: 10px;
    padding: 30px;
    margin: auto;
    overflow: hidden;
    .heading-signup {
      text-align: center;
      margin-bottom: 40px;
    }
    .form-steps {
      opacity: 1;
      transition: opacity 1s ease;
      .step {
        position: relative;
        .line {
          width: 0%;
          position: absolute;
          height: 4px;
          background-color: #1a73e8;
          animation: ${loadingLine} 1;
        }
        hr {
          border-width: 2px;
          position: relative;
        }
        span {
          color: black;
          position: absolute;
          bottom: 50%;
          right: 50%;
          z-index: 12;
          background-color: var(--mainColor);
          transform: translate(50%, 50%);
          border: 2px solid #bdbcbc;
          width: 30px;
          height: 30px;
          font-size: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          cursor: default;
        }
      }
      .btn-navigate {
        margin-top: 25px;
      }
    }
  }
  .forgot-password {
    display: flex;
    justify-content: space-between;
  }
  .already-have,
  .forgot-password {
    text-align: center;
    padding: 15px 0;
    font-size: 20px;
    a {
      padding-left: 10px;
      padding-right: 10px;
      color: var(--mainColor);
      &:hover {
        color: var(--hoverColor);
      }
    }
  }
  &.form-row {
    display: flex;
    justify-content: space-between;
    .full-column {
      width: 100%;
    }
    .half-column {
      width: 45%;
    }
    .half-column-credit {
      display: flex;
      width: 45%;
      padding-top: 0px;
      padding-bottom: 10px;
      justify-content: center;
    }
    .quarter-column {
      width: 25%;
      margin-left: 10px;
      margin-right: 10px;
      text-align: center;
      label {
        text-indent: 0px;
      }
    }
    .full-column,
    .half-column,
    .quarter-column {
      padding-top: 10px;
      padding-bottom: 10px;
    }
    @media (max-width: 786px) {
      .half-column-credit {
        width: 90%;
        margin: auto;
        flex-direction: column;
        .quarter-column {
          width: 90%;
        }
      }
    }
    .credit-form {
      position: relative;
      overflow: hidden;
      .img-box-credit {
        display: grid;
        position: absolute;
        transition: transform 1s ease;
        bottom: 50%;
        right: 10px;
        transform: translateY(50%);
        grid-template-columns: repeat(2, 40px);
        column-gap: 10px;
        img {
          width: 40px;
          height: 30px;
        }
      }
    }
    @media (max-width: 786px) {
      &.form-row {
        display: flex;
        flex-direction: column;
        .half-column {
          width: 100%;
        }
      }
      input:not(:last-child) {
        width: 100%;
      }
      .next-btn {
        width: 100%;
      }
    }
  }
  input:not([type="checkbox"]),
  select,
  .credit-form {
    border-radius: 10px;
    height: 45px;
    font-size: 20px;
    background-color: transparent;
    width: 100%;
    border: none;
    outline: 2px solid #bdbcbc;
    :focus-visible {
      outline: 2px solid #0c65e3;
    }
  }
  label {
    text-indent: 10px;
    padding: 5px 0;
    font-size: 18px;
    cursor: pointer;
  }
  .form-row {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .show-password {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    @media (max-width: 576px) {
      justify-content: center;
    }
    display: flex;
    justify-content: end;
  }
  .next-btn {
    span,
    button,
    a {
      cursor: pointer;
      display: block;
      text-align: center;
      color: white;
      width: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
      border-radius: 10px;
      background-color: #1a73e8;
      font-size: 20px;
      box-shadow: 0px 0px 5px 0px black;
      &:hover {
        background-color: #0053c0;
      }
    }
  }
  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
  .confirm-email {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 10px;
    input {
      text-align: center;
    }
  }
  input {
    &[type="checkbox"] {
      margin-left: 10px;
      margin-right: 10px;
      width: 25px;
      height: 25px;
      outline: none;
      cursor: pointer;
    }
  }
  &.send_to_email {
    text-align: center;
    .succeeded {
      width: 200px;
      height: 200px;
      display: flex;
      background: #0fcb0f;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin: 30px auto;
    }
  }
  &.error-btn {
    text-align: center;
    background: darkred;
    width: 150px;
    padding: 10px 10px;
    border-radius: 25px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    &:hover {
      background: red;
    }
  }
`;
const Select = styled.select`
  option {
    color: black;
  }
`;
export { Div, Select };
