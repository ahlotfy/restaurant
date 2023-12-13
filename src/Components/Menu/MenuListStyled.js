import styled from "@emotion/styled";

const Div = styled.div`
  .menulist &.box {
    text-align: center;
    background-color: var(--secondColor);
    margin: 20px auto;
    color: white;
    overflow: hidden;
    border-radius: 15px;
    .img-box {
      height: 180px;
      width: 100%;
      padding: 20px;
      background-color: var(--thirdyColor);
      border-bottom-left-radius: 50px;
    }
    .caption {
      padding: 0 20px;
      .title-box {
        padding-top: 20px;
      }
      .details-box {
        padding-bottom: 20px;
        .quantity {
          margin-bottom: 20px;
          & button:not(:last-child) {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--mainColor);
            :hover {
              background-color: var(--hoverColor);
            }
          }
          span {
            margin: auto 20px;
          }
        }
        .remove-btn {
          margin: 20px 0;
          button {
            background-color: darkred;
            :hover {
              background-color: red;
            }
          }
        }
        .price {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          span {
            font-size: 30px;
          }
        }
        .add-cart {
          background-color: var(--mainColor);
          :hover {
            background-color: var(--hoverColor);
          }
        }
      }
    }
  }
`;
const Img = styled.img`
  width: 152px;
  height: 145px;
  object-fit: contain;
  transition: transform 0.3s ease;
  :hover {
    transform: scale(1.1);
  }
`;
const Span = styled.span`
  font-size: 20px;
`;
export { Div, Span, Img };
