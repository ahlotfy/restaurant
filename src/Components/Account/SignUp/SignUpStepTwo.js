import React, { useRef, useState } from "react";
import { Div, Select } from "../AccountStyled";
import { useContextForm } from "../../../Context/ContextAPIForm";
import { useNavigate } from "react-router-dom";

const SignUpStepTwo = () => {
  const Navigate = useNavigate();
  const {
    stepsDone,
    phone,
    setPhone,
    governorate,
    setGovernorate,
    region,
    setRegion,
    street,
    setStreet,
    houseNumber,
    setHouseNumber,
    role,
    setRole,
  } = useContextForm();
  const loadingLine = useRef();
  // Start Phone
  let phonePattern = /0(10|11|12|15)\d{8}/g;
  const [phoneIsError, setPhoneIsError] = useState(false);
  // End Phone
  // Start Governorate
  const [governorateIsError, setGovernorateIsError] = useState(false);
  // End Governorate
  // Start Region
  const [regionIsError, setRegionIsError] = useState(false);
  // End Region
  // Start Street
  const [streetIsError, setStreetIsError] = useState(false);
  // End Street
  // Start HouseNumber
  const [houseNumberIsError, setHouseNumberIsError] = useState(false);
  // End HouseNumber
  // Start Role
  const [roleIsError, setRoleIsError] = useState(false);
  // End Role
  let stepTwoDone = true;
  const slideTwo = useRef();
  const nextbtn = () => {
    if ((!phonePattern.test(phone) && phone.length < 11) || isNaN(+phone)) {
      setPhoneIsError(true);
      stepTwoDone = false;
    }
    if (governorate === "") {
      setGovernorateIsError(true);
      stepTwoDone = false;
    }
    if (region === "") {
      setRegionIsError(true);
      stepTwoDone = false;
    }
    if (street === "") {
      setStreetIsError(true);
      stepTwoDone = false;
    }
    if (houseNumber === "" || isNaN(+role)) {
      setHouseNumberIsError(true);
      stepTwoDone = false;
    }
    if (role === "" || isNaN(+role)) {
      setRoleIsError(true);
      stepTwoDone = false;
    }
    if (stepTwoDone) {
      stepsDone();
      slideTwo.current.style.opacity = "0.6";
      loadingLine.current.style.animationDuration = "1.5s";
      setTimeout(() => {
        Navigate("/signup/stepthree", { replace: true });
      }, 800);
    }
    if (stepTwoDone) {
    }
  };
  //Start Navgiate Button
  const backBtn = () => {
    slideTwo.current.style.opacity = "0.6";
    setTimeout(() => {
      Navigate("/signup/stepone", { replace: true });
    }, 800);
  };
  //End Navgiate Button
  return (
    <>
      <Div className="form-steps" ref={slideTwo}>
        <Div className="step">
          <div className="line" ref={loadingLine} />
          <span>2</span>
          <hr />
        </Div>
        <Div className="form-row">
          <Div className="half-column">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              maxLength={11}
              minLength={11}
              value={phone ? phone : ""}
              required
              style={{ outlineColor: phoneIsError ? "red" : "" }}
              onChange={(e) => {
                setPhone(e.target.value);
                setPhoneIsError(false);
              }}
            />
            {phoneIsError ? <Div className="error">Not valid phone</Div> : ""}
          </Div>
          <Div className="half-column">
            <label>Choose a governorate</label>
            <Select
              style={{ outlineColor: governorateIsError ? "red" : "" }}
              value={governorate ? governorate : ""}
              onChange={(e) => {
                setGovernorate(e.target.value);
                setGovernorateIsError(false);
              }}
              name="governorate"
              required
            >
              <option value="cairo">Cairo</option>
              <option value="gizza">Gizza</option>
              <option value="alex">Alexandria</option>
              <option value="shubra_el-kheima">Shubra El-Kheima</option>
              <option value="luxor">Luxor</option>
              <option value="el-mahalla_el-kubra">El-Mahalla El-Kubra</option>
              <option value="tanta">Tanta</option>
            </Select>
            {governorateIsError ? (
              <Div className="error">Please select your governorate</Div>
            ) : (
              ""
            )}
          </Div>
        </Div>
        <Div className="form-row">
          <Div className="half-column">
            <label>Region</label>
            <input
              type="text"
              name="region"
              value={region ? region : ""}
              required
              style={{ outlineColor: regionIsError ? "red" : "" }}
              onChange={(e) => {
                setRegion(e.target.value);
                setRegionIsError(false);
              }}
            />
            {regionIsError ? (
              <Div className="error">Please write your region</Div>
            ) : (
              ""
            )}
          </Div>
          <Div className="half-column">
            <label>Street</label>
            <input
              type="text"
              name="street"
              required
              style={{ outlineColor: streetIsError ? "red" : "" }}
              value={street ? street : ""}
              onChange={(e) => {
                setStreet(e.target.value);
                setStreetIsError(false);
              }}
            />
            {streetIsError ? "" : ""}
          </Div>
        </Div>
        <Div className="form-row">
          <Div className="half-column">
            <label>House number In Street (Number)</label>
            <input
              type="text"
              name="house-number"
              value={houseNumber ? houseNumber : ""}
              required
              style={{ outlineColor: houseNumberIsError ? "red" : "" }}
              onChange={(e) => {
                setHouseNumber(e.target.value);
                setHouseNumberIsError(false);
              }}
            />
            {houseNumberIsError ? (
              <Div className="error">Please write your House Number</Div>
            ) : (
              ""
            )}
          </Div>
          <Div className="half-column">
            <label>Role (Number)</label>
            <input
              type="text"
              maxLength={2}
              name="role"
              value={role ? role : ""}
              required
              style={{ outlineColor: roleIsError ? "red" : "" }}
              onChange={(e) => {
                setRole(e.target.value);
                setRoleIsError(false);
              }}
            />
            {roleIsError ? (
              <Div className="error">Please write your Role in your house</Div>
            ) : (
              ""
            )}
          </Div>
        </Div>
        <Div className="form-row btn-navigate ">
          <Div className="next-btn half-column">
            <span
              onClick={() => {
                backBtn();
              }}
            >
              Back
            </span>
          </Div>
          <Div className="next-btn half-column">
            <span
              onClick={(e) => {
                e.preventDefault();
                nextbtn();
              }}
            >
              Next
            </span>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default SignUpStepTwo;
