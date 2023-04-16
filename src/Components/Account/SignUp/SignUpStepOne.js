import React, { useRef, useState } from "react";
import { Div } from "../AccountStyled";
import { useContextForm } from "../../../Context/ContextAPIForm";
import { useNavigate } from "react-router-dom";
const SignUpStepOne = () => {
  const Navigate = useNavigate();
  const {
    accounts,
    stepsDone,
    fname,
    setFName,
    lname,
    setLName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = useContextForm();
  const loadingLine = useRef();
  const [type, setType] = useState(true);
  //Start Fname
  let userName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const [fnameIsError, setFnameIsError] = useState(false);
  //End Fname
  //Start Lname
  const [lnameIsError, setLnameIsError] = useState(false);
  //End Lname
  //Start Email
  let emailPattren = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const [emailIsError, setEmailError] = useState(false);
  //End Email
  //Start Password
  let passwordPattern =
    /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  const [passwordIsError, setPasswordIsError] = useState(false);
  //End Password
  //Start Conf Password
  const [confirmPasswordIsError, setConfirmPasswordIsError] = useState(false);
  //End Conf Password
  const slideOne = useRef();
  let stepOneDone = true;
  const handelNextBtn = () => {
    if (!userName.test(fname)) {
      setFnameIsError(true);
      stepOneDone = false;
    }
    if (!userName.test(lname)) {
      setLnameIsError(true);
      stepOneDone = false;
    }
    if (
      !emailPattren.test(email) ||
      accounts?.map((acc) => acc.email).includes(email)
    ) {
      setEmailError(true);
      stepOneDone = false;
    }
    if (!passwordPattern.test(password)) {
      setPasswordIsError(true);
      stepOneDone = false;
    }
    if (password !== confirmPassword || confirmPassword === "") {
      setConfirmPasswordIsError(true);
      stepOneDone = false;
    }
    if (stepOneDone) {
      stepsDone();
      slideOne.current.style.opacity = "0.6";
      loadingLine.current.style.animationDuration = "1s";
      setTimeout(() => {
        Navigate("/signup/steptwo", { replace: true });
      }, 800);
    }
  };
  return (
    <Div className="form-steps" ref={slideOne}>
      <Div className="step">
        <div className="line" ref={loadingLine} />
        <span>1</span>
        <hr />
      </Div>
      <Div className="form-row">
        <Div className="half-column">
          <label htmlFor="fname">Frist name</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={fname ? fname : ""}
            required
            style={{ outlineColor: fnameIsError ? "red" : "" }}
            onChange={(e) => {
              setFName(e.target.value);
              setFnameIsError(false);
            }}
          />
          {fnameIsError ? (
            <div className="error">
              1. between 5 and 15.
              <br />
              2. The first character should be alphabetic.
            </div>
          ) : (
            ""
          )}
        </Div>
        <Div className="half-column">
          <label htmlFor="lname">Last name</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value={lname ? lname : ""}
            required
            style={{ outlineColor: lnameIsError ? "red" : "" }}
            onChange={(e) => {
              setLName(e.target.value);
              setLnameIsError(false);
            }}
          />
          {lnameIsError ? (
            <div className="error">
              1. between 5 and 15.
              <br />
              2. The first character should be alphabetic.
            </div>
          ) : (
            ""
          )}
        </Div>
      </Div>
      <Div className="form-row">
        <Div className="full-column">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email ? email : ""}
            required
            style={{ outlineColor: emailIsError ? "red" : "" }}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
          />
          {emailIsError ? (
            <div className="error">Email not valid or already taken</div>
          ) : (
            ""
          )}
        </Div>
      </Div>
      <Div className="form-row">
        <Div className="half-column">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type={type ? "password" : "text"}
            required
            value={password}
            id="password"
            name="password"
            style={{ outlineColor: passwordIsError ? "red" : "" }}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordIsError(false);
              setConfirmPasswordIsError(false);
            }}
          />
          {passwordIsError ? (
            <div className="error">
              must be greater than or equal to 8, one or more uppercase and
              lowercase characters, numeric values andone or more special
              characters
            </div>
          ) : (
            ""
          )}
        </Div>
        <Div className="half-column">
          <label htmlFor="confirm-password">Confirm password</label>
          <br />
          <input
            type={type ? "password" : "text"}
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            style={{ outlineColor: confirmPasswordIsError ? "red" : "" }}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setPasswordIsError(false);
              setConfirmPasswordIsError(false);
            }}
          />
          {confirmPasswordIsError ? (
            <div className="error">
              Please type the same password to confirm
            </div>
          ) : (
            ""
          )}
        </Div>
      </Div>
      <Div className="show-password">
        <label htmlFor="show-password">Show Password</label>
        <input
          type="checkbox"
          id="show-password"
          onClick={() => {
            setType(!type);
          }}
        />
      </Div>
      <Div className="next-btn">
        <span
          onClick={(e) => {
            handelNextBtn(e);
            e.preventDefault();
          }}
        >
          Next
        </span>
      </Div>
    </Div>
  );
};

export default SignUpStepOne;
