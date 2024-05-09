import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Page2 from "./components/Forms/Page2";
import Page3 from "./components/Forms/Page3";
import Page4 from "./components/Forms/Page4";
import Page5 from "./components/Forms/Page5"
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
          <Route path="/Page3" element={<Page3 />}></Route>
          <Route path="/Page4" element={<Page4 />}></Route>
          <Route path="/Page5" element={<Page5 />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Header />
      <LoginSignup /> */}
    </>
  );
}

export default App;
