import styled from "@emotion/styled";
const Section = styled.section``;
const Div = styled.div`
  .heading-commnet {
    text-align: center;
    h2 {
      font-family: "Dancing Script", cursive;
    }
  }
  .slide {
    margin-top: 50px;
    padding-bottom: 80px;
    a {
      display: none;
    }
    .carousel-indicators {
      align-items: center;
      button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: none;
        background-color: var(--secondColor);
        padding: 0;
        &.active {
          background-color: var(--mainColor);
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .detail-box {
    background-color: var(--secondColor);
    color: var(--white);
    padding: 25px 25px 15px 25px;
    border-radius: 5px;
  }
  .img-box {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    .handle-img {
      width: 100px;
      border: 4px solid var(--mainColor);
      height: 100px;
      border-radius: 50%;
      position: relative;
      z-index: -1;
      :before {
        content: "";
        position: absolute;
        top: -17%;
        left: 35%;
        transform: translateY(-50%);
        border-width: 15px;
        border-style: solid;
        border-color: transparent transparent var(--mainColor) transparent;
        z-index: 321;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .box {
    display: flex;
    flex-direction: column;
    margin: 15px;
  }
`;
export { Section, Div };
