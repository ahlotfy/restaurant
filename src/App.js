import ContextProvider from "./Context/ShoppingContext";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Book from "./Components/Book/Book";
import Comments from "./Components/Comments/Comments";
import FooterSection from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Account/Login";
import ForgotPassWord from "./Components/Account/ForgotPassWord";
import UpdateProfile from "./Components/Account/UpdateProfile";
import SignUp from "./Components/Account/SignUp";
import "./Components/global.scss";
import Menu from "./Components/Menu/Menu";
function App() {
  return (
    <ContextProvider>
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login " element={<Login />} />
        <Route path="/forgot-passWord" element={<ForgotPassWord />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
