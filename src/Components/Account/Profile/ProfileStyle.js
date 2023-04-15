import styled from "@emotion/styled";

const Div = styled.div`
  &.profileSection {
    min-height: 100vh;
    background-color: var(--secondColor);
    color: white;
    .box {
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .img-box {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        border: 5px solid var(--mainColor);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .details-box {
        padding-top: 40px;
        .input-box {
          margin-bottom: 20px;
          line-height: 1.5;
          span {
            color: var(--mainColor);
            font-size: 24px;
            font-family: var(--mainFontFamily);
            padding: 0px 20px;
          }
          input:not([type="checkbox"]),
          select,
          .credit-form {
            border-radius: 10px;
            height: 45px;
            font-size: 20px;
            background-color: transparent;
            color: white;
            width: 100%;
            border: none;
            outline: 2px solid #bdbcbc;
            :focus-visible {
              outline: 2px solid #0c65e3;
            }
          }
        }
        .btn-edit {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          button,
          a {
            text-align: center;
            min-width: 100px;
            padding: 5px 8px;
            margin: 15px 0px;
            font-size: 18px;
            background: var(--secondColor);
            border-radius: 25px;
            box-shadow: 0px 0px 10px 0px black;
            :hover {
              background: var(--hoverColor);
            }
          }
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
  }
`;
const Input = styled.input``;
export { Div, Input };
