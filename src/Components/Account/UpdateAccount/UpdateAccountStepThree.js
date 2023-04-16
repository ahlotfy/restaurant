import React, { useRef, useState } from "react";
import { Div } from "../AccountStyled";
import vezaIcon from "../../images/vezaIcon.jpg";
import masterCardLogo from "../../images/mastercardIogo.jpg";
import { useContextForm } from "../../../Context/ContextAPIForm";
import { useNavigate } from "react-router-dom";
const UpdateAccountStepThree = () => {
  const slideThree = useRef();
  const Navigate = useNavigate();
  const {
    loginAccount,
    activeAccount,
    updateAccount,
    accounts,
    upCarditNumber,
    setUpCarditNumber,
    upCardHolder,
    setUpCardHolder,
    upMonth,
    setUpMonth,
    upYear,
    setUpYear,
    upCVC,
    setUpCVC,
  } = useContextForm();
  const { email } = activeAccount;
  const cardImgs = useRef();
  const loadingLine = useRef();
  const acc = accounts?.find((acc) => acc.email === email);
  // Start Cardit
  const patternCard =
    /^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$/;
  const [cardIsError, setCardNumIsError] = useState(false);
  // End Cardit
  //Start CardHolder
  let userName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const [upCardHolderIsError, setupCardHolderIsError] = useState(false);
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

  const updateBtn = (e) => {
    if (!patternCard.test(upCarditNumber) || upCarditNumber === "") {
      setCardNumIsError(true);
      stepThreeDone = false;
    }
    if (
      upCardHolder.length < 5 ||
      !isNaN(Number.parseInt(upCardHolder)) ||
      !userName.test(upCardHolder)
    ) {
      setupCardHolderIsError(true);
      stepThreeDone = false;
    }
    if (
      upMonth.length > 2 ||
      upMonth.length === 0 ||
      isNaN(+upMonth) ||
      +upMonth <= 0 ||
      +upMonth > 12
    ) {
      setMonthIsError(true);
      stepThreeDone = false;
    }
    if (
      upYear.length !== 4 ||
      isNaN(+upYear) ||
      +upYear < 1950 ||
      +upYear > 2050
    ) {
      setYearIsError(true);
      stepThreeDone = false;
    }
    if (upCVC.length < 3) {
      setCVCIsError(true);
      stepThreeDone = false;
    }
    if (stepThreeDone === false) {
      e.preventDefault();
    }
    if (stepThreeDone) {
      loadingLine.current.style.animationDuration = "1s";
      updateAccount(acc);
      loginAccount(acc);
      setTimeout(() => {
        Navigate("/profile", { replace: true });
      }, 500);
    }
  };
  const backbtn = () => {
    slideThree.current.style.opacity = "0.6";
    setTimeout(() => {
      Navigate("/update_account/steptwo", { replace: true });
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
                value={upCarditNumber}
                required
                style={{ outlineColor: cardIsError ? "red" : "" }}
                onChange={(e) => {
                  setUpCarditNumber(e.target.value);
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
                value={upCardHolder}
                style={{ outlineColor: upCardHolderIsError ? "red" : "" }}
                onChange={(e) => {
                  setUpCardHolder(e.target.value);
                  setupCardHolderIsError(false);
                }}
              />
              {upCardHolderIsError ? (
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
                value={upMonth}
                style={{ outlineColor: monthisError ? "red" : "" }}
                onChange={(e) => {
                  setUpMonth(e.target.value);
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
                value={upYear}
                style={{ outlineColor: yearisError ? "red" : "" }}
                onChange={(e) => {
                  setUpYear(e.target.value);
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
                value={upCVC}
                style={{ outlineColor: CVCisError ? "red" : "" }}
                maxLength={3}
                onChange={(e) => {
                  setUpCVC(e.target.value);
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
            <span
              type="submit"
              onClick={(e) => {
                updateBtn(e);
              }}
            >
              Update
            </span>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default UpdateAccountStepThree;
