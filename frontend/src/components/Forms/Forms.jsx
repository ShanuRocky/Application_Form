import "./Form.css";
import IITPLogo from "../assets/IITp.png";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <>
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
          <select id="adNumber">
            <option selected>IITI/FACREC-CHE/2023/JULY/02</option>
          </select>
        </div>
        <div className="main">
          <label for="appDate">Date of Application</label>
          <input type="date" id="appDate" value="2024-04-01" />
        </div>
        <div className="main">
          <label for="appNumber">Application Number</label>
          <input type="text" id="appNumber" value="1698348185" />
        </div>
        <div className="main">
          <label for="postApplied">Post Applied For *</label>
          <select id="postApplied">
            <option selected>Assistant Professor Grade II</option>
          </select>
        </div>
        <div className="main">
          <label for="department">Department/School*</label>
          <select id="department">
            <option selected>Chemical Engineering</option>
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
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="main">
                <label for="middleName">Middle Name:</label>
                <input type="text" id="middleName" name="middleName" />
              </div>
              <div className="main">
                <label for="lastName">Last Name*</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
              <div className="main">
                <label for="Fathername">Father's Name*</label>
                <input type="text" id="Fathername" name="Fathername" required />
              </div>
              <div className="main">
                <label for="Nationality">Nationality*</label>
                <select id="Nationality">
                  <option selected>India</option>
                </select>
              </div>
              <div className="main">
                <label for="BirthDate">Birth Date</label>
                <input type="date" id="BirthDate" value="2024-04-01" />
              </div>
              <div className="main">
                <label for="Gender">Gender*</label>
                <select id="Gender">
                  <option selected>Male</option>
                </select>
              </div>
              <div className="main">
                <label for="MarialStatus">MarialStatus*</label>
                <select id="MarialStatus">
                  <option selected>India</option>
                </select>
              </div>
              <div className="main">
                <label for="Category">Category</label>
                <input type="text" id="Category" value="UR" />
              </div>
              <div className="main">
                <label for="IDproof">ID Proof*</label>
                <select id="IDproof">
                  <option selected>India</option>
                </select>
              </div>
              <div className="main">
                <div class="photo-upload">
                  <h3>Update Id Proof*</h3>
                  <input type="file" id="photo" name="photo" required />
                </div>
              </div>
            </form>
          </div>
          <div className="second">
            <img className="iitplogo" src={IITPLogo} alt="" />
            <div className="main">
              <div class="photo-upload">
                <h3>Update Id Proof*</h3>
                <input type="file" id="photo" name="photo" required />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="address">
          <div className="correspondence">
            <h2>Correspondence Address</h2>
            <textarea type="text" placeholder="620 McDermott Canyon" />
            <textarea type="text" placeholder="Joliet" />
            <textarea type="text" placeholder="Pennsylvania" />
            <textarea type="text" placeholder="Nepal" />
            <textarea type="text" placeholder="18220-" />
          </div>
          <div className="permanent">
            <h2>Permanent Address</h2>
            <textarea type="text" placeholder="2865 Gleichner Valley" />
            <textarea type="text" placeholder="Hoover" />
            <textarea type="text" placeholder="Louisiana" />
            <textarea type="text" placeholder="Timor-Leste" />
            <textarea type="text" placeholder="23802-" />
          </div>
        </div>
      </div>
      <div className="last">
      <form className="form-container">
    <div className="main">
        <label for="mobile">Mobile*</label>
        <input type="text" id="mobile" name="mobile" required />
    </div>
    <div className="main">
        <label for="alternatemobile">Alternate Mobile*</label>
        <input type="text" id="alternatemobile" name="alternatemobile" required />
    </div>

    <div className="main">
        <label for="investor">Investor Implementat</label>
        <input type="text" id="investor" name="investor" />
    </div>

        <div className="main">
          <label for="Email">Email</label>
          <input type="text" id="Email" value="1698348185" />
        </div>
        <div className="main">
        <label for="alternateemail">alternate email*</label>
        <input type="text" id="alternateemail" name="alternateemail" required />
    </div>
</form>

      </div>
    </div>
      <div className="footer">
          <div className="log">
          <Link to="/Login" className="button">
            SAVE & NEXT
          </Link>
          </div>
      </div>
      </>
  );
};

export default Page1;
