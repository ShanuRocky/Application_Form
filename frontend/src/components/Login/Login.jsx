import "./Login.css";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import { Link} from "react-router-dom";
import { useState } from "react";
import Validation from "./LoginVlidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [values, setValues] = useState({
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
    if (errors.email === "" && errors.password === "") {
      console.log({values});
      console.log("how ?");
      console.log(values);
      axios.post("http://localhost:8081/login", values)
        .then((res) => {
          console.log({res});
          if(res.data === "success")
          {
            alert("succesfully loged in");
            navigate("/Forms",{state : {logemail : values.email}});
          }else
          {
            console.log("fuck");
            alert("wrong credentials");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="bodyy">
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <form action="/login" method="POST" className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              name="email"
              type="email"
              placeholder="Email Id"
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
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleInput}
            />
            <div>
              {errors.password && (
                <span className="errortype">{errors.password}</span>
              )}
            </div>
          </div>
        </form>
        <div className="forgot-password">
          Forgot Password? <Link to="/Forgot">Click Here</Link>{" "}
        </div>

        <div className="submit-container">
          <Link to="/" className="submit gray">
            Sign Up
          </Link>
          <button onClick={handleSubmit} type="submit" className="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
