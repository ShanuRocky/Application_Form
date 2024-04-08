import "./Login.css";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Validation from "./LoginVlidation";

const Login = () => {

  const [values,setValues] = useState({
    email: '',
    password: ''
  });
  const[errors,setErrors] = useState({
    
  });


  const handleInput = (event) => 
  {
    setValues(prev => ({...prev,[event.target.name]:[event.target.value]}));
  }

   const handleSubmit = (event) => {
     event.preventDefault();
     setErrors(Validation(values));
  }

  return (
    <div className="bodyy">
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <form action="" className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input name="email" type="email" placeholder="Email Id" onChange={handleInput}
            />
            <div>
            {errors.email && <span className="errortype">{errors.email}</span>}
          </div>
          </div>
          
          <div className="input">
            <img src={password_icon} alt="" />
            <input name="password" type="password" placeholder="Password" onChange={handleInput}
            />
            <div>
          {errors.password && <span className="errortype">{errors.password}</span>}
          </div>
          </div>
          
        </form>
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
            type="submit"
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
