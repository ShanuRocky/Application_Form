import "./Form.css";
import IITPLogo from "../assets/IITp.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Page1 = () => {

  const gotemail = useLocation();

    const [values, setValues] = useState({
      adnumber: "",
      appdate: "",
      appnumber: "1698348185",
      postapplied: "",
      department: "",
      firstname: "",
      middlename: "",
      lastname: "",
      fathername: "",
      birthdate: "",
      marialstatus: "",
      gender: "",
      natinality: "",
      category: "UR",
      idproof: "",
      photo1: "",
      photo2: "",
      email: gotemail.state.logemail,
      corr_house:   "" ,  
      corr_area :   "", 
      corr_state:   "",
      corr_country: "",
      corr_pin:     "", 
      per_house:   "" ,  
      per_area :   "", 
      per_state:   "",
      per_country: "",
      per_pin:     "",
      mobile: "",
      alernatemobile: "",
      investor: "",
      alernateemail: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setErrors(form_validation(values)); //to do - ujjawal bkl, yeh tu kar

    if (true) {
     axios.post("http://localhost:8081/page1", values)
          .then((res) => {
            if(res.data === "sucess") navigate("/page2");
            else alert("please fill the necessary fields");
          })
          .catch((err) => console.log(err));
        }
  };

  return (
    <>
      <form action="/page1" method="get">
        <div className="body">
          <div className="headerr">
            <h2>
              Welcome: <span>Ma Agarwal</span>
            </h2>
            <div className="log">
              <Link to="/Login" className="button">
                Change Password
              </Link>
              <Link to="/Login" className="button">
                Logout
              </Link>
            </div>
          </div>

          <form className="form-container">
            <div className="main">
              <label for="adNumber">Advertisement Number *</label>
              <select id="adNumber"
                      name="adnumber"
                      onChange={handleInput}>
                <option selected>IITI/FACREC-CHE/2023/JULY/02</option>
                <option selected>none</option>
              </select>
            </div>
            <div className="main">
              <label for="appDate">Date of Application</label>
              <input type="date" id="appDate"
              onChange={handleInput}
              name="appdate" />
            </div>
            <div className="main">
              <label for="appNumber">Application Number</label>
              <input type="text" id="appNumber" value="1698348185" 
              name="appnumber"/>
            </div>
            <div className="main">
              <label for="postApplied">Post Applied For *</label>
              <select id="postApplied"
              onChange={handleInput}
              name="postapplied">
                <option selected>Assistant Professor Grade II</option>
                <option selected>none</option>
              </select>
            </div>
            <div className="main">
              <label for="department" required>
                Department/School*
              </label>
              <select id="department"
              onChange={handleInput}
              name="department">
                <option selected>Chemical Engineering</option>
                <option selected>none</option>
              </select>
            </div>
          </form>

          <div className="father">
            <div className="top">
              <h3>1. Personal Details</h3>
            </div>
            <div class="personal-details">
              <div className="first">
                <form action="/submit" method="post" className="form-container">
                  <div className="main">
                    <label for="firstName">First Name*</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstname"
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="main">
                    <label for="middleName">Middle Name:</label>
                    <input type="text" id="middleName" 
                    name="middlename" 
                    onChange={handleInput}/>
                  </div>
                  <div className="main">
                    <label for="lastName">Last Name*</label>
                    <input type="text" id="lastName" 
                    name="lastname" 
                    onChange={handleInput}
                    required />
                  </div>
                  <div className="main">
                    <label for="Fathername">Father's Name*</label>
                    <input
                      type="text"
                      id="Fathername"
                      name="fathername"
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="main">
                    <label for="Nationality">Nationality*</label>
                    <select id="Nationality"
                    onChange={handleInput}
                    type="text"
                    name = "nationality">
                      <option selected>India</option>
                      <option selected>none</option>
                    </select>
                  </div>
                  <div className="main">
                    <label for="BirthDate">Birth Date</label>
                    <input type="date" id="BirthDate"
                    onChange={handleInput} 
                    name = "birthdate"/>
                  </div>
                  <div className="main">
                    <label for="Gender">Gender*</label>
                    <select id="Gender"
                    type = "text"
                    name = "gender"
                    onChange={handleInput}>
                      <option selected>Male</option>
                      <option selected>none</option>
                    </select>
                  </div>
                  <div className="main">
                    <label for="MarialStatus">MarialStatus*</label>
                    <select id="MarialStatus"
                    type = "text"
                    name = "marialstatus"
                    onChange={handleInput}>
                      <option selected>India</option>
                      <option selected>none</option>
                    </select>
                  </div>
                  <div className="main">
                    <label for="Category">Category</label>
                    <input type="text" id="Category" value="UR"
                    name = "category"/>
                  </div>
                  <div className="main">
                    <label for="IDproof">ID Proof*</label>
                    <select id="IDproof"
                    type = "text"
                    name = "idproof"
                    onChange={handleInput}>
                      <option selected>India</option>
                      <option selected>none</option>
                    </select>
                  </div>
                  <div className="main">
                    <div class="photo-upload">
                      <h3>Update Id Proof*</h3>
                      <input type="file" id="photo" name="photo1" required
                      onChange={handleInput} />
                    </div>
                  </div>
                </form>
              </div>
              <div className="second">
                <img className="iitplogo" src={IITPLogo} alt="" />
                <div className="main">
                  <div class="photo-upload">
                    <h3>Update Id Proof*</h3>
                    <input type="file" id="photo" name="photo2" required
                    onChange={handleInput} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="address">
              <div className="correspondence">
                <h2>Correspondence Address</h2>
                <textarea type="text" placeholder="house"
                onChange={handleInput}
                name = "corr_house" />
                <textarea type="text" placeholder="area"
                onChange={handleInput} 
                name = "corr_area"/>
                <textarea type="text" placeholder="state"
                onChange={handleInput}
                name = "corr_state" />
                <textarea type="text" placeholder="country"
                onChange={handleInput}
                name = "corr_country" />
                <textarea type="text" placeholder="pin"
                onChange={handleInput}
                name = "corr_pin" />
              </div>
              <div className="permanent">
                <h2>Permanent Address</h2>
                <textarea type="text" placeholder="house"
                onChange={handleInput}
                name = "per_house" />
                <textarea type="text" placeholder="area"
                onChange={handleInput}
                name = "per_area" />
                <textarea type="text" placeholder="state"
                onChange={handleInput}
                name = "per_state" />
                <textarea type="text" placeholder="country"
                onChange={handleInput}
                name = "per_country" />
                <textarea type="text" placeholder="pin"
                onChange={handleInput}
                name = "per_pin" />
              </div>
            </div>
          </div>
          <div className="last">
            <form method="get" action="/page1" className="form-container">
              <div className="main">
                <label for="mobile">Mobile*</label>
                <input type="text" id="mobile" name="mobile"
                onChange={handleInput} required />
              </div>
              <div className="main">
                <label for="alternatemobile">Alternate Mobile*</label>
                <input
                  type="text"
                  id="alternatemobile"
                  name="alternatemobile"
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="main">
                <label for="investor">Investor Implementat</label>
                <input type="text" id="investor" name="investor"
                onChange={handleInput} />
              </div>

              <div className="main">
                <label for="Email">Email</label>
                <input type="text" id="Email" value={gotemail.state.logemail}
                 />
              </div>
              <div className="main">
                <label for="alternateemail">alternate email*</label>
                <input
                  type="text"
                  id="alternateemail"
                  name="alternateemail"
                  onChange={handleInput}
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="footer">
          <div className="log">
            <button className="button"
            onClick={handleSubmit}>
            SAVE & NEXT
          </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Page1;
