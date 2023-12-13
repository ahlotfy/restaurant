import ContextProvider from "./Context/ShoppingContext";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Book from "./Components/Book/Book";
import Comments from "./Components/Comments/Comments";
import FooterSection from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Components/Account/Login/Login";
import SignUp from "./Components/Account/SignUp/SignUp";
import "./Components/global.scss";
import Menu from "./Components/Menu/Menu";
import GlobalProviderForm from "./Context/ContextAPIForm";
import ForgotPassWord from "./Components/Account/ForgotPassword/ForgotPassword";
import SignUpStepOne from "./Components/Account/SignUp/SignUpStepOne";
import SignUpStepTwo from "./Components/Account/SignUp/SignUpStepTwo";
import SignUPStepThree from "./Components/Account/SignUp/SignUPStepThree";
import ForgotPasswordStepOne from "./Components/Account/ForgotPassword/ForgotPasswordStepOne";
import ForgotPasswordStepTwo from "./Components/Account/ForgotPassword/ForgotPasswordStepTwo";
import ForgotPasswordStepThree from "./Components/Account/ForgotPassword/ForgotPasswordStepThree";
import Profile from "./Components/Account/Profile/Profile";
import UpdateAccount from "./Components/Account/UpdateAccount/UpdateAccount";
import UpdateAccountStepOne from "./Components/Account/UpdateAccount/UpdateAccountStepOne";
import UpdateAccountStepTwo from "./Components/Account/UpdateAccount/UpdateAccountStepTwo";
import UpdateAccountStepThree from "./Components/Account/UpdateAccount/UpdateAccountStepTwo";
import DeleteAccount from "./Components/Account/DeleteAccount/DeleteAccount";
function App() {
  return (
    <ContextProvider>
      <GlobalProviderForm>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Menu />
                  <About />
                  <Book />
                  <Comments />
                  <FooterSection />
                </>
              }
            />
            <Route path="/signup" element={<SignUp />}>
              <Route path="stepone" element={<SignUpStepOne />} />
              <Route path="steptwo" element={<SignUpStepTwo />} />
              <Route path="stepthree" element={<SignUPStepThree />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/update_account" element={<UpdateAccount />}>
              <Route path="stepone" element={<UpdateAccountStepOne />} />
              <Route path="steptwo" element={<UpdateAccountStepTwo />} />
              <Route path="stepthree" element={<UpdateAccountStepThree />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassWord />}>
              <Route path="stepthree" element={<ForgotPasswordStepThree />} />
              <Route path="stepone" element={<ForgotPasswordStepOne />} />
              <Route path="steptwo" element={<ForgotPasswordStepTwo />} />
            </Route>
            <Route path="/delete_account" element={<DeleteAccount />} />
            <Route
              path="*"
              element={
                <>
                  <h1>Error</h1>
                  <span style={{ fontSize: "20px" }}>
                    Go{" "}
                    <Link style={{ color: "var(--mainColor)" }} to={"/"}>
                      Home
                    </Link>
                  </span>
                </>
              }
            />
          </Routes>
        </Router>
      </GlobalProviderForm>
    </ContextProvider>
  );
}

export default App;
