import React, { useEffect, useRef } from "react";
import { Div } from "../AccountStyled";
import SignUpStepOne from "./SignUpStepOne";
import SignUpStepTwo from "./SignUpStepTwo";
import SignUPStepThree from "./SignUPStepThree";
import { useLocation, useNavigate } from "react-router-dom";
import { useContextForm } from "../../../Context/ContextAPIForm";
import { Link } from "react-router-dom";
const SignUp = () => {
  const signup = useRef();
  const location = useLocation();
  const Navigate = useNavigate();
  const { activeAccount } = useContextForm();
  useEffect(() => {
    if (activeAccount === {}) {
      if (
        location.pathname === "/signup" ||
        location.pathname === "/signup/stepone" ||
        location.pathname === "/signup/steptwo" ||
        location.pathname === "/signup/stepthree"
      ) {
        Navigate("/profile", { replace: true });
      }
    }
  });
  return (
    <Div className="account-section" ref={signup}>
      <Div className="container ">
        <Div className="box">
          <Div className="logo">
            <Link to="/">Restourant</Link>
          </Div>
          <form action="/">
            <Div className="account-form ">
              <Div className="heading-signup">
                <h1>Signup</h1>
              </Div>
              <Div>
                {location.pathname === "/signup/stepone" ? (
                  <SignUpStepOne />
                ) : location.pathname === "/signup/steptwo" ? (
                  <SignUpStepTwo />
                ) : location.pathname === "/signup/stepthree" ? (
                  <SignUPStepThree />
                ) : (
                  <SignUpStepOne />
                )}
              </Div>
            </Div>
            <Div className="already-have">
              <span>Already have an account</span>
              <Link to="/login">Login</Link>
            </Div>
          </form>
        </Div>
      </Div>
    </Div>
  );
};

export default SignUp;
