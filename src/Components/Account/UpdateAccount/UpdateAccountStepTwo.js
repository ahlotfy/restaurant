import React, { useRef, useState } from "react";
import { Div, Select } from "../AccountStyled";
import { useContextForm } from "../../../Context/ContextAPIForm";
import { useNavigate } from "react-router-dom";

const UpdateAccountStepTwo = () => {
  const Navigate = useNavigate();
  const {
    upPhone,
    setUpPhone,
    upGovernorate,
    setUpGovernorate,
    upRegion,
    setUpRegion,
    upStreet,
    setUpStreet,
    upHouseNumber,
    setUpHouseNumber,
    upRole,
    setUpRole,
  } = useContextForm();
  const loadingLine = useRef();
  // Start Phone
  let upPhonePattern = /0(10|11|12|15)\d{8}/g;
  const [upPhoneIsError, setPhoneIsError] = useState(false);
  // End Phone
  // Start Governorate
  const [upGovernorateIsError, setGovernorateIsError] = useState(false);
  // End Governorate
  // Start Region
  const [upRegionIsError, setRegionIsError] = useState(false);
  // End Region
  // Start Street
  const [upStreetIsError, setStreetIsError] = useState(false);
  // End Street
  // Start HouseNumber
  const [upHouseNumberIsError, setHouseNumberIsError] = useState(false);
  // End HouseNumber
  // Start Role
  const [upRoleIsError, setRoleIsError] = useState(false);
  // End Role
  const slideTwo = useRef();
  let stepTwoDone = true;
  const nextbtn = () => {
    if (
      (!upPhonePattern.test(upPhone) && upPhone.length < 11) ||
      isNaN(+upPhone)
    ) {
      setPhoneIsError(true);
      stepTwoDone = false;
    }
    if (upGovernorate === "") {
      setGovernorateIsError(true);
      stepTwoDone = false;
    }
    if (upRegion === "") {
      setRegionIsError(true);
      stepTwoDone = false;
    }
    if (upStreet === "") {
      setStreetIsError(true);
      stepTwoDone = false;
    }
    if (upHouseNumber === "" || isNaN(+upRole)) {
      setHouseNumberIsError(true);
      stepTwoDone = false;
    }
    if (upRole === "" || isNaN(+upRole)) {
      setRoleIsError(true);
      stepTwoDone = false;
    }
    if (stepTwoDone) {
      slideTwo.current.style.opacity = "0.6";
      loadingLine.current.style.animationDuration = "1.5s";
      setTimeout(() => {
        Navigate("/update_account/stepthree", { replace: true });
      }, 800);
    }
  };
  //Start Navgiate Button
  const backBtn = () => {
    slideTwo.current.style.opacity = "0.6";
    setTimeout(() => {
      Navigate("/update_account/stepone", { replace: true });
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
              name="upPhone"
              maxLength={11}
              minLength={11}
              value={upPhone ? upPhone : ""}
              required
              style={{ outlineColor: upPhoneIsError ? "red" : "" }}
              onChange={(e) => {
                setUpPhone(e.target.value);
                setPhoneIsError(false);
              }}
            />
            {upPhoneIsError ? (
              <Div className="error">Not valid upPhone</Div>
            ) : (
              ""
            )}
          </Div>
          <Div className="half-column">
            <label>Choose a upGovernorate</label>
            <Select
              style={{ outlineColor: upGovernorateIsError ? "red" : "" }}
              value={upGovernorate}
              onChange={(e) => {
                setUpGovernorate(e.target.value);
                setGovernorateIsError(false);
              }}
              name="upGovernorate"
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
            {upGovernorateIsError ? (
              <Div className="error">Please select your upGovernorate</Div>
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
              name="upRegion"
              value={upRegion ? upRegion : ""}
              required
              style={{ outlineColor: upRegionIsError ? "red" : "" }}
              onChange={(e) => {
                setUpRegion(e.target.value);
                setRegionIsError(false);
              }}
            />
            {upRegionIsError ? (
              <Div className="error">Please write your upRegion</Div>
            ) : (
              ""
            )}
          </Div>
          <Div className="half-column">
            <label>Street</label>
            <input
              type="text"
              name="upStreet"
              required
              style={{ outlineColor: upStreetIsError ? "red" : "" }}
              value={upStreet ? upStreet : ""}
              onChange={(e) => {
                setUpStreet(e.target.value);
                setStreetIsError(false);
              }}
            />
            {upStreetIsError ? "" : ""}
          </Div>
        </Div>
        <Div className="form-row">
          <Div className="half-column">
            <label>House number In Street (Number)</label>
            <input
              type="text"
              name="house-number"
              value={upHouseNumber ? upHouseNumber : ""}
              required
              style={{ outlineColor: upHouseNumberIsError ? "red" : "" }}
              onChange={(e) => {
                setUpHouseNumber(e.target.value);
                setHouseNumberIsError(false);
              }}
            />
            {upHouseNumberIsError ? (
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
              name="upRole"
              value={upRole ? upRole : ""}
              required
              style={{ outlineColor: upRoleIsError ? "red" : "" }}
              onChange={(e) => {
                setUpRole(e.target.value);
                setRoleIsError(false);
              }}
            />
            {upRoleIsError ? (
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

export default UpdateAccountStepTwo;
