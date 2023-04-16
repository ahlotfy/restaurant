import React, { useEffect } from "react";
import { Div } from "../AccountStyled";
import { Navigate, useLocation } from "react-router-dom";
import UpdateAccountStepOne from "./UpdateAccountStepOne";
import UpdateAccountStepTwo from "./UpdateAccountStepTwo";
import UpdateAccountStepThree from "./UpdateAccountStepThree";
import { useContextForm } from "../../../Context/ContextAPIForm";
import { Link } from "react-router-dom";

const UpdateAccount = () => {
  const location = useLocation();
  const { activeAccount } = useContextForm();
  useEffect(() => {
    if (activeAccount.email === undefined) {
      if (
        location.pathname === "/update_account" ||
        location.pathname === "/update_account/stepone" ||
        location.pathname === "/update_account/steptwo" ||
        location.pathname === "/update_account/stepthree"
      ) {
        Navigate("/login", { replace: true });
      }
    }
  });
  return (
    <Div className="account-section">
      <Div className="container ">
        <Div className="box">
          <Div className="logo">
            <Link to="/">Restourant</Link>
          </Div>
          <form action="/">
            <Div className="account-form ">
              <Div className="heading-signup">
                <h1>Update Account</h1>
              </Div>
              <Div>
                {location.pathname === "/update_account/stepone" ? (
                  <UpdateAccountStepOne />
                ) : location.pathname === "/update_account/steptwo" ? (
                  <UpdateAccountStepTwo />
                ) : location.pathname === "/update_account/stepthree" ? (
                  <UpdateAccountStepThree />
                ) : (
                  <UpdateAccountStepOne />
                )}
              </Div>
            </Div>
            <Div className="error-btn">
              <Link to="/delete_account">Delete Account</Link>
            </Div>
          </form>
        </Div>
      </Div>
    </Div>
  );
};

export default UpdateAccount;
