import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Page2 from "./components/Forms/Page2";
import Forms from "./components/Forms/Forms";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Forgot from "./components/ForgotPage/Forgot";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoginSignup />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Forms" element={<Forms />}></Route>
          <Route path="/Forgot" element={<Forgot />}></Route>
          <Route path="/Page2" element={<Page2 />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Header />
      <LoginSignup /> */}
    </>
  );
}

export default App;
