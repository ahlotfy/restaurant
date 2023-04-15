import React, { useEffect } from "react";
import { Div } from "./ProfileStyle";
import imgProfile from "../../images/client4.jpg";
import { useContextForm } from "../../../Context/ContextAPIForm";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Profile = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const { activeAccount, setActiveAccount } = useContextForm();
  const {
    fname,
    lname,
    email,
    phone,
    governorate,
    region,
    street,
    houseNumber,
    role,
  } = activeAccount;
  useEffect(() => {
    if (activeAccount.email === undefined && location.pathname === "/profile") {
      Navigate("/login", { replace: true });
    }
  });
  const signout = () => {
    setActiveAccount({});
    Navigate("/login", { replace: true });
  };

  return (
    <Div className="profileSection">
      <Div className="container">
        <Div className="box">
          <Div className="img-box">
            <img src={imgProfile} alt="" />
          </Div>
          <Div className="details-box">
            <Div className="input-box">
              <span>Name:</span> {fname ? fname : ""} {lname ? lname : ""}
            </Div>
            <Div className="input-box">
              <span>Email:</span>
              {email ? email : ""}
            </Div>
            <Div className="input-box">
              <span>Phone:</span>
              {phone ? phone : ""}
            </Div>
            <Div className="input-box">
              <span>Governorate:</span>
              {governorate ? governorate : ""}
            </Div>
            <Div className="input-box">
              <span>Region:</span>
              {region ? region : ""}
            </Div>
            <Div className="input-box">
              <span>Street:</span>
              {street ? street : ""}
            </Div>
            <Div className="input-box">
              <span>House Number:</span>
              {houseNumber ? houseNumber : ""}
            </Div>
            <Div className="input-box">
              <span>Role:</span>
              {role ? role : ""}
            </Div>
            <Div className="btn-edit">
              <Link to="/update_account/stepone">Update Profile</Link>
              <button onClick={() => signout()}>Sign out</button>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default Profile;
