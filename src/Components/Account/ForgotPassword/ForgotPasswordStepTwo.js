import React, { useRef, useState } from "react";
import { Div } from "../AccountStyled";
import { useNavigate } from "react-router-dom";

const ForgotPasswordStepTwo = () => {
  let vaild = false;
  const Navigate = useNavigate();
  const slideTwo = useRef();
  const loadingLine = useRef();
  const inputOTP = useRef();
  const [inputOPT1, setinputOPT1] = useState("");
  const [inputOPT2, setinputOPT2] = useState("");
  const [inputOPT3, setinputOPT3] = useState("");
  const [inputOPT4, setinputOPT4] = useState("");
  const [inputOPT5, setinputOPT5] = useState("");
  const backBtnSlideTwo = () => {
    slideTwo.current.style.opacity = "0.6";
    setTimeout(() => {
      Navigate("/forgotpassword/stepone", { replace: true });
    }, 500);
  };
  const nextBtnSlideTwo = () => {
    vaild = true;
    slideTwo.current.style.opacity = "0.6";
    loadingLine.current.style.animationDuration = "1s";
    sessionStorage.setItem("requestState", JSON.stringify(vaild));
    setTimeout(() => {
      Navigate("/forgotpassword/stepthree", { replace: true });
    }, 500);
  };
  return (
    <Div className="full-column form-steps" ref={slideTwo}>
      <Div className="step">
        <div className="line" ref={loadingLine} />
        <span>2</span>
        <hr />
      </Div>
      <Div>
        <h3>Confirm</h3>
        <Div className="confirm-email" ref={inputOTP}>
          <input
            type="text"
            maxLength={1}
            required
            value={inputOPT1}
            onChange={(e) => {
              setinputOPT1(e.target.value);
              if (e.target.value.length >= 1) {
                inputOTP.current.children[1].focus();
              }
            }}
          />
          <input
            type="text"
            maxLength={1}
            required
            value={inputOPT2}
            onChange={(e) => {
              setinputOPT2(e.target.value);
              if (e.target.value.length >= 1) {
                inputOTP.current.children[2].focus();
              }
              if (e.target.value.length === 0) {
                inputOTP.current.children[0].focus();
              }
            }}
          />
          <input
            type="text"
            maxLength={1}
            required
            value={inputOPT3}
            onChange={(e) => {
              setinputOPT3(e.target.value);
              if (e.target.value.length >= 1) {
                inputOTP.current.children[3].focus();
              }
              if (e.target.value.length === 0) {
                inputOTP.current.children[1].focus();
              }
            }}
          />
          <input
            type="text"
            maxLength={1}
            required
            value={inputOPT4}
            onChange={(e) => {
              setinputOPT4(e.target.value);
              if (e.target.value.length >= 1) {
                inputOTP.current.children[4].focus();
              }
              if (e.target.value.length === 0) {
                inputOTP.current.children[2].focus();
              }
            }}
          />
          <input
            type="text"
            maxLength={1}
            required
            value={inputOPT5}
            onChange={(e) => {
              setinputOPT5(e.target.value);
              if (e.target.value.length === 0) {
                inputOTP.current.children[3].focus();
              }
            }}
          />
        </Div>
        <Div className="form-row full-column ">
          <Div className="next-btn half-column">
            <span onClick={() => backBtnSlideTwo()}>Back</span>
          </Div>
          <Div className="next-btn half-column">
            <span onClick={() => nextBtnSlideTwo()}>Next</span>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default ForgotPasswordStepTwo;
