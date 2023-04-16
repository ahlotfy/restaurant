import React, { useState } from "react";
import { Div } from "../AccountStyled";
import { useContextForm } from "../../../Context/ContextAPIForm";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const DeleteAccount = () => {
  const [type, setType] = useState(false);
  const { loginAccount, setAccounts, accounts } = useContextForm();
  // Start Email
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  // End Email
  // Start Password
  const [password, setPassword] = useState("");
  // Start Password
  const Navigate = useNavigate();
  const login = (e) => {
    let acc = accounts?.find((acc) => acc.email === email)
      ? accounts.find((acc) => acc.email === email)
      : "";
    if (!(acc.email === email && acc.password === password)) {
      setError(true);
      e.preventDefault();
    } else {
      loginAccount({});
      setAccounts(
        accounts?.filter((accs) => accs.email !== acc.email),
        ...accounts
      );
      setTimeout(() => {
        Navigate("/", { replace: true });
      }, 800);
    }
  };
  return (
    <Div className="account-section">
      <Div className="container ">
        <Div className="box">
          <Div className="logo">
            <Link to="/">Restourant</Link>
          </Div>
          <Div className="account-form ">
            <Div className="heading-signup">
              <h1>Delete Account</h1>
            </Div>
            <Div className="form-row">
              <Div className="half-column">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  style={{ outlineColor: error ? "red" : "" }}
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(false);
                  }}
                />
              </Div>
              <Div className="half-column">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type={type ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  style={{ outlineColor: error ? "red" : "" }}
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                />
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
            {error ? (
              <Div className="error" style={{ textAlign: "center" }}>
                Email or Password Not Vaild
              </Div>
            ) : (
              ""
            )}
            <Div className="next-btn">
              <Div className="form-row">
                <Div className="full-column">
                  <button onClick={(e) => login(e)}>Delete Account</button>
                </Div>
              </Div>
            </Div>
          </Div>
          <Div className="forgot-password">
            <Link to="/signup">Sign Up</Link>
            <Link to="/forgotpassword">Forgot Password</Link>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default DeleteAccount;
