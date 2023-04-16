import React, { useRef, useState } from "react";
import { Div } from "../AccountStyled";
import { useContextForm } from "../../../Context/ContextAPIForm";
import { useNavigate } from "react-router-dom";
const UpdateAccountStepOne = () => {
  const Navigate = useNavigate();
  const {
    upFname,
    setUpFName,
    upLname,
    setUpLName,
    upPassword,
    setUpPassword,
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
  //Start Password
  let passwordPattern =
    /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  const [passwordIsError, setPasswordIsError] = useState(false);
  //End Password
  //Start Conf Password
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordIsError, setConfirmPasswordIsError] = useState(false);
  //End Conf Password
  const slideOne = useRef();
  let stepOneDone = true;
  const handelNextBtn = () => {
    if (!userName.test(upFname)) {
      setFnameIsError(true);
      stepOneDone = false;
    }
    if (!userName.test(upLname)) {
      setLnameIsError(true);
      stepOneDone = false;
    }
    if (!passwordPattern.test(upPassword)) {
      setPasswordIsError(true);
      stepOneDone = false;
    }
    if (upPassword !== confirmPassword || confirmPassword === "") {
      setConfirmPasswordIsError(true);
      stepOneDone = false;
    }
    if (stepOneDone) {
      slideOne.current.style.opacity = "0.6";
      loadingLine.current.style.animationDuration = "1s";
      setTimeout(() => {
        Navigate("/update_account/steptwo", { replace: true });
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
            value={upFname ? upFname : ""}
            required
            style={{ outlineColor: fnameIsError ? "red" : "" }}
            onChange={(e) => {
              setFnameIsError(false);
              setUpFName(e.target.value);
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
            value={upLname ? upLname : ""}
            required
            style={{ outlineColor: lnameIsError ? "red" : "" }}
            onChange={(e) => {
              setLnameIsError(false);
              setUpLName(e.target.value);
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
        <Div className="half-column">
          <label htmlFor="password">New Password</label>
          <br />
          <input
            type={type ? "password" : "text"}
            required
            value={upPassword}
            id="password"
            name="password"
            style={{ outlineColor: passwordIsError ? "red" : "" }}
            onChange={(e) => {
              setUpPassword(e.target.value);
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
          <label htmlFor="confirm-password">Confirm New password</label>
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

export default UpdateAccountStepOne;
