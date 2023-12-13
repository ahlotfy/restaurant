import React, { useRef, useState } from "react";
import { Div } from "../AccountStyled";
import vezaIcon from "../../images/vezaIcon.jpg";
import masterCardLogo from "../../images/mastercardIogo.jpg";
import { useContextForm } from "../../../Context/ContextAPIForm";
import { useLocation, useNavigate } from "react-router-dom";
const SignUPStepThree = () => {
  const slideThree = useRef();
  const location = useLocation();
  const Navigate = useNavigate();
  const {
    deleteSessionStorage,
    currentData,
    stepsDone,
    submitForm,
    cardNum,
    setCard,
    cardHolder,
    setCardHolder,
    month,
    setMonth,
    year,
    setYear,
    CVC,
    setCVC,
  } = useContextForm();
  const cardImgs = useRef();
  const loadingLine = useRef();
  // Start Cardit
  const patternCard =
    /^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$/;
  const [cardIsError, setCardNumIsError] = useState(false);
  // End Cardit
  //Start CardHolder
  let userName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const [cardHolderIsError, setcardHolderIsError] = useState(false);
  //End CardHolder
  //Start Month
  const [monthisError, setMonthIsError] = useState(false);
  //End Month
  //Start Year
  const [yearisError, setYearIsError] = useState(false);
  //End Year
  //Start CVC
  const [CVCisError, setCVCIsError] = useState(false);
  //End Month
  let stepThreeDone = true;
  const submitBtn = (e) => {
    stepsDone();
    if (!patternCard.test(cardNum) || cardNum === "") {
      setCardNumIsError(true);
      stepThreeDone = false;
    }
    if (
      cardHolder.length < 5 ||
      !isNaN(Number.parseInt(cardHolder)) ||
      !userName.test(cardHolder)
    ) {
      setcardHolderIsError(true);
      stepThreeDone = false;
    }
    if (
      month.length > 2 ||
      month.length === 0 ||
      isNaN(+month) ||
      +month <= 0 ||
      +month > 12
    ) {
      setMonthIsError(true);
      stepThreeDone = false;
    }
    if (year.length !== 4 || isNaN(+year) || +year < 1950 || +year > 2050) {
      setYearIsError(true);
      stepThreeDone = false;
    }
    if (CVC.length < 3) {
      setCVCIsError(true);
      stepThreeDone = false;
    }
    if (stepThreeDone === false) {
      e.preventDefault();
    }
    if (
      currentData.fname === undefined ||
      currentData.fname === "" ||
      currentData.lname === undefined ||
      currentData.lname === "" ||
      currentData.email === undefined ||
      currentData.ename === "" ||
      ((currentData.password === undefined || "") &&
        location.pathname === "/signup/stepthree")
    ) {
      stepThreeDone = false;
      Navigate("/signup/stepone", { replace: true });
    } else if (
      currentData.phone === undefined ||
      currentData.phone === "" ||
      currentData.governorate === undefined ||
      currentData.governorate === "" ||
      currentData.region === undefined ||
      currentData.region === "" ||
      currentData.street === undefined ||
      currentData.street === "" ||
      currentData.houseNumber === undefined ||
      currentData.houseNumber === "" ||
      currentData.role === undefined ||
      (currentData.role === "" && location.pathname === "/signup/stepthree")
    ) {
      stepThreeDone = false;
      Navigate("/signup/steptwo", { replace: true });
    }
    loadingLine.current.style.animationDuration = "1s";
    if (stepThreeDone) {
      submitForm();
      stepsDone();
      deleteSessionStorage();
    }
  };
  const backbtn = () => {
    slideThree.current.style.opacity = "0.6";
    setTimeout(() => {
      Navigate("/signup/steptwo", { replace: true });
    }, 500);
  };
  return (
    <>
      <Div className="form-steps" ref={slideThree}>
        <Div className="step">
          <div className="line" ref={loadingLine} />
          <span>3</span>
          <hr />
        </Div>
        <Div className="form-row">
          <Div className="full-column">
            <label htmlFor="credit-num">Add a credit or debit card</label>
            <Div className="credit-form">
              <input
                type="text"
                name="credit-num"
                id="credit-num"
                maxLength={20}
                value={cardNum}
                required
                style={{ outlineColor: cardIsError ? "red" : "" }}
                onChange={(e) => {
                  setCard(e.target.value);
                  setCardNumIsError(false);
                  if (e.target.value.length < 4) {
                    cardImgs.current.style.transform = "translate(0px,50%)";
                  } else {
                    cardImgs.current.style.transform = "translate(220px,50%)";
                  }
                }}
              />
              <Div className="img-box-credit" ref={cardImgs}>
                <img src={vezaIcon} alt="Veza Icon" />
                <img src={masterCardLogo} alt="MasterCard Icon" />
              </Div>
            </Div>
            {cardIsError ? (
              <Div className="error">
                1.The string should not contain any special characters,
                alphabets, or whitespaces.
                <br />
                <br />
                2.The number of characters must be equal to 16.
                <br />
                <br />
                3.The string should start with either a 2-digit number range
                (ranging from 51 to 55) or a 4-digit number range (ranging from
                2221 to 2720).
              </Div>
            ) : (
              ""
            )}
          </Div>
        </Div>
        <Div className="form-row" style={{ alignItems: "center" }}>
          <Div className="half-column">
            <Div>
              <label htmlFor="card-holder">Card holder</label>
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                required
                value={cardHolder}
                style={{ outlineColor: cardHolderIsError ? "red" : "" }}
                onChange={(e) => {
                  setCardHolder(e.target.value);
                  setcardHolderIsError(false);
                }}
              />
              {cardHolderIsError ? (
                <Div className="error">
                  Please type the Card Holder correctly
                </Div>
              ) : (
                ""
              )}
            </Div>
          </Div>
          <Div className="half-column-credit">
            <Div className="quarter-column">
              <label htmlFor="month-in-card">Month</label>
              <input
                type="text"
                required
                id="month-in-card"
                name="month-in-card"
                maxLength={2}
                max={12}
                min={1}
                value={month}
                style={{ outlineColor: monthisError ? "red" : "" }}
                onChange={(e) => {
                  setMonth(e.target.value);
                  setMonthIsError(false);
                }}
              />
              {monthisError ? (
                <Div className="error">Please type the month correctly</Div>
              ) : (
                ""
              )}
            </Div>
            <Div className="quarter-column">
              <label htmlFor="year-in-card">Year</label>
              <input
                type="text"
                required
                id="year-in-card"
                name="year-in-card"
                maxLength={4}
                value={year}
                style={{ outlineColor: yearisError ? "red" : "" }}
                onChange={(e) => {
                  setYear(e.target.value);
                  setYearIsError(false);
                }}
              />
              {yearisError ? (
                <Div className="error">Please type the year correctly</Div>
              ) : (
                ""
              )}
            </Div>
            <Div className="quarter-column">
              <label htmlFor="cvc-in-card">CVC</label>
              <input
                type="text"
                id="cvc-in-card"
                required
                name="cvc-in-card"
                value={CVC}
                style={{ outlineColor: CVCisError ? "red" : "" }}
                maxLength={3}
                onChange={(e) => {
                  setCVC(e.target.value);
                  setCVCIsError(false);
                }}
              />
              {CVCisError ? (
                <Div className="error">Please type the CVC correctly</Div>
              ) : (
                ""
              )}
            </Div>
          </Div>
        </Div>
        <Div className="form-row">
          <Div className="next-btn half-column">
            <span onClick={() => backbtn()}>Back</span>
          </Div>
          <Div className="next-btn half-column">
            <button
              type="submit"
              onClick={(e) => {
                submitBtn(e);
              }}
            >
              Sign up
            </button>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default SignUPStepThree;
