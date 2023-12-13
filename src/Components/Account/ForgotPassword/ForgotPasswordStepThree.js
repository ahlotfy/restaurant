import React, { useRef } from "react";
import { Div } from "../AccountStyled";
import { useNavigate } from "react-router-dom";

const ForgotPasswordStepThree = () => {
  const Navigate = useNavigate();
  const slideThree = useRef();
  const loadingLine = useRef();
  const acc = sessionStorage.getItem("requestPassword")
    ? JSON.parse(sessionStorage.getItem("requestPassword"))
    : "";
  return (
    <Div className="form-row form-steps" ref={slideThree}>
      <Div className="full-column">
        <Div className="step">
          <div className="line" ref={loadingLine} />
          <span>3</span>
          <hr />
        </Div>
        <Div className="send_to_email">
          <Div className="succeeded">
            <h1>Succeeded</h1>
          </Div>
          <p>The password has been sent to the email...</p>
          <span>{`${acc ? acc.email.slice(0, 3) : ""}************${
            acc ? acc.email.slice(-4) : ""
          }`}</span>
        </Div>
        <Div className="form-row">
          <Div className="next-btn full-column">
            <button
              onClick={() => {
                Navigate("/login", { replace: true });
                sessionStorage.removeItem("requestState");
                sessionStorage.removeItem("requestPassword");
              }}
            >
              Login
            </button>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default ForgotPasswordStepThree;
