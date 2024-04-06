import "./Forgot.css";
import email_icon from "../assets/email.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bodyy">
      <div className="container">
        <div className="header">
          <div className="text"> Reset Password </div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Id"></input>
          </div>
        </div>

        <div className="submit-container">
          <Link to="/Login" className="submit">
            Reset Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
