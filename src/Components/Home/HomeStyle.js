import styled from "@emotion/styled";
const Div = styled.div`
  &.HomeArea {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    background-color: black;
  }
  &.bg-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export { Img, Div };
