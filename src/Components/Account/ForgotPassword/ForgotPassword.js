import React, { useEffect } from "react";
import { Div } from "../AccountStyled";
import { useLocation, useNavigate } from "react-router-dom";
import ForgotPasswordStepOne from "./ForgotPasswordStepOne";
import ForgotPasswordStepTwo from "./ForgotPasswordStepTwo";
import ForgotPasswordStepThree from "./ForgotPasswordStepThree";
import { useContextForm } from "../../../Context/ContextAPIForm";
import { Link } from "react-router-dom";
const ForgotPassWord = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  const { activeAccount } = useContextForm();
  const acc = sessionStorage.getItem("requestPassword")
    ? JSON.parse(sessionStorage.getItem("requestPassword"))
    : false;
  const vaild = sessionStorage.getItem("requestState")
    ? JSON.parse(sessionStorage.getItem("requestState"))
    : false;
  useEffect(() => {
    if (!(activeAccount.email === undefined)) {
      if (
        location.pathname === "/forgotpassword" ||
        location.pathname === "/forgotpassword/stepone" ||
        location.pathname === "/forgotpassword/steptwo" ||
        location.pathname === "/forgotpassword/stepthree"
      ) {
        Navigate("/profile", { replace: true });
      }
    }
  });
  if (acc === false) {
    if (
      location.pathname === "/forgotpassword/steptwo" ||
      location.pathname === "/forgotpassword/stepthree"
    ) {
      Navigate("/forgotpassword", { replace: true });
    } else if (
      location.pathname === "/forgotpassword/steptwo" || vaild ? vaild : false
    ) {
      Navigate("/forgotpassword", { replace: true });
    }
  }
  return (
    <>
      <Div className="account-section">
        <Div className="container ">
          <Div className="box">
            <Div className="logo">
              <Link to="/">Restourant</Link>
            </Div>
            <Div className="account-form ">
              <Div className="heading-signup">
                <h1>Reset Password</h1>
              </Div>
              <form action="/">
                {location.pathname === "/forgotpassword/stepone" ? (
                  <ForgotPasswordStepOne />
                ) : location.pathname === "/forgotpassword/steptwo" ? (
                  <ForgotPasswordStepTwo />
                ) : location.pathname === "/forgotpassword/stepthree" ? (
                  <ForgotPasswordStepThree />
                ) : (
                  <ForgotPasswordStepOne />
                )}
              </form>
            </Div>
            <Div className="forgot-password">
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Login</Link>
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default ForgotPassWord;
