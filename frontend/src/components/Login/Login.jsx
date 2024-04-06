import "./Login.css";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bodyy">
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Id"></input>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password"></input>
          </div>
        </div>
          <div className="forgot-password">
            Forgot Password? <Link to="/Forgot">Click Here</Link>{" "}
          </div>

        <div className="submit-container">
          <Link
            to="/"
            className="submit gray"
          >
            Sign Up
          </Link>
          <Link
            to = "/Forms"
            className="submit"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
