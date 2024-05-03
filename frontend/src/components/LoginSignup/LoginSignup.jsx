import "./LoginSignup.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { Link } from "react-router-dom";
import Validation from "./LoginSignupValidation";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    console.log(errors);
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      console.log("how ?");
      console.log(values);
      axios.post("http://localhost:8081/signup", values)
        .then((res) => {
          navigate("/Login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="bodyy">
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <form action="/signup" method="POST" className="inputs" onSubmit={handleSubmit}>
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleInput}
            />
            <div>
              {errors.name && <span className="errortype">{errors.name}</span>}
            </div>
          </div>

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email Id"
              name="email"
              onChange={handleInput}
            />
            <div>
              {errors.email && (
                <span className="errortype">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
            <div>
              {errors.password && (
                <span className="errortype">{errors.password}</span>
              )}
            </div>
          </div>
        </form>
        <div className="submit-container">
          <button onClick={handleSubmit} type="submit" className="submit">
            Sign Up
          </button>

          <Link to="/Login" className="submit gray">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
