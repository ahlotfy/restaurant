import React, { useRef, useState } from "react";
import { Div } from "../AccountStyled";
import { useNavigate } from "react-router-dom";
import { useContextForm } from "../../../Context/ContextAPIForm";
const ForgotPasswordStepOne = () => {
  const Navigate = useNavigate();
  const { accounts } = useContextForm();
  const slideOne = useRef();
  const loadingLine = useRef();
  const [email, setEmail] = useState("");
  const [emailIsError, setEmailIsError] = useState(false);
  const nextBtn = () => {
    const acc = accounts?.find((acc) => acc.email === email);
    if (acc) {
      sessionStorage.setItem("requestPassword", JSON.stringify(acc));
      slideOne.current.style.opacity = "0.6";
      loadingLine.current.style.animationDuration = "1s";
      console.log();
      setTimeout(() => {
        Navigate("/forgotpassword/steptwo", { replace: true });
      }, 500);
    } else {
      setEmailIsError(true);
    }
  };
  return (
    <Div className="full-column form-steps" ref={slideOne}>
      <Div className="step">
        <div className="line" ref={loadingLine} />
        <span>1</span>
        <hr />
      </Div>
      <Div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          style={{ outlineColor: emailIsError ? "red" : "" }}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailIsError(false);
          }}
        />
        {emailIsError ? <Div className="error">The Email is wrong</Div> : ""}
      </Div>
      <Div className="form-row">
        <Div className="next-btn full-column">
          <span onClick={() => nextBtn()}>Next</span>
        </Div>
      </Div>
    </Div>
  );
};

export default ForgotPasswordStepOne;
