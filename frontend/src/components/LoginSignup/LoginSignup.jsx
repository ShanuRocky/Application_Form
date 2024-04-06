import "./LoginSignup.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { Link } from "react-router-dom";

const LoginSignup = () => {

  return (
    <div className="bodyy">
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name"></input>
            </div>

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Id"></input>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password"></input>
          </div>
        </div>
        <div className="submit-container">
          <Link
           to = "/Login"
            className="submit"
          >
            Sign Up
          </Link>
          <Link
            to="/Login"
            className="submit gray"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
