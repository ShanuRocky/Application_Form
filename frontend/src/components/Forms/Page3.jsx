import "./Form.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Page3 = () => {

  const gotemail = useLocation();

    const navigate = useNavigate();

  const [values, setValues] = useState({
    email: gotemail.state.logemail,
    position: "",
    organization: "",
    status: "",
    dateofjoining: "2024-04-01",
    leavingdate: "",
    duration: "",
    position1: "",
    organization1: "",
    joiningdate1: "",
    leavingdate1: "",
    duration1: "",
    position2: "",
    organization2: "",
    joiningdate2: "",
    leavingdate2: "",
    duration2: "",
    confirmation: "",
    teachposition1: "",
    teachemployer1: "",
    teachcourse1: "",
    teachnumofstud1: "",
    teachjoiningdate1: "",
    teachleavingdate1: "",
    teachduration1: "",
    teachposition2: "",
    teachemployer2: "",
    teachcourse2: "",
    teachnumofstud2: "",
    teachjoiningdate2: "",
    teachleavingdate2: "",
    teachduration2: "",
    resposition1: "",
    resinstitute1: "",
    ressupervisor1: "",
    resjoiningdate1: "",
    resleavingdate1: "",
    resduration1: "",
    resposition2: "",
    resinstitute2: "",
    ressupervisor2: "",
    resjoiningdate2: "",
    resleavingdate2: "",
    resduration2: "",
    exorganization1: "",
    exprofile1: "",
    exjoiningdate1: "",
    exleavingdate1: "",
    exduration1: "",
    exorganization2: "",
    exprofile2: "",
    exjoiningdate2: "",
    exleavingdate2: "",
    exduration2: "",
    specialization: "",
    research: ""
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //navigate("/login");
    // setErrors(form_validation(values)); //to do - ujjawal bkl, yeh tu kar
      if (true)
      {
      axios.post("http://localhost:8081/page3", values)
           .then((res) => {
             if(res.data === "success") navigate("/page5",{state : {logemail : values.email}});
             else alert("please fill the necessary fields");
           })
           .catch((err) => console.log(err));
        }
  };

  return (
    <>
      <div className="body">
        <div className="headerr">
          <h2>
            Welcome: <span>Ma Agarwal</span>
          </h2>
          <div className="log">
            <Link to="/Login" className="button">
              Logout
            </Link>
          </div>
        </div>
        <div className="father">
          <div className="top">
            <h3>(A) Present Employment </h3>
          </div>
          <div className="personal-details">
            <form className="form-container" action="/submit" method="post">
              <div className="main">
                <label for="position">Position</label>
                <input type="text" id="position" name="position" onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="organization">Organization / Institution</label>
                <input type="text" id="organization" name="organization" onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="status">Status</label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  onChange={handleInput}
                />
              </div>
              <div className="main">
                <label for="dateofsuccessfulthesisdefence">
                  Date of joining
                </label>
                <input
                  type="date"
                  id="dateofsuccessfulthesisdefence"
                  value="2024-04-01"
                />
              </div>
              <div className="main">
                <label for="leavingdate">
                  Date of leaving (Mention continue if working)
                </label>
                <input
                  type="text"
                  id="leavingdate"
                  name="leavingdate"
                  onChange={handleInput}
                />
              </div>
              <div className="main">
                <label for="duration">
                  Duration (in years & months)
                </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  onChange={handleInput}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="father">
          <div className="top">
            <h3>(B) Employment History (Afte PhD, Starting with Latest) </h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Position Held</th>
                <th>Organization/Institution</th>
                <th>Date of Joining</th>
                <th>Date of Leaving</th>
                <th>Duration (in years & months)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <input
                    type="text"
                    name="position1"
                    placeholder="Position 1"
                    onChange={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="organization1"
                    placeholder="Organization 1"
                    onChange={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="joiningdate1"
                    placeholder="Joining Date 1"
                    onChange={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="leavingdate1"
                    placeholder="Leaving Date 1"
                    onChange={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="duration1"
                    placeholder="Duration 1"
                    onChange={handleInput}
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <input
                    type="text"
                    name="position2"
                    placeholder="Position 2"
                    onChange={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="organization2"
                    placeholder="Organization 2"
                    onChange={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="joiningdate2"
                    placeholder="Joining Date 2"
                    onChange={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="leavingdate2"
                    placeholder="Leaving Date 2"
                    onChange={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="duration2"
                    placeholder="Duration 2"
                    onChange={handleInput}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Experience note */}
          <p className="experience-note">
            Experience: - Minimum 6 years' experience of which at least 3 years
            should be at the level of Assistant Professor Grade I/ Senior
            Scientific Officer/ Senior Design Engineer.
          </p>

          {/* Yes/No option */}
          {/* This would likely be part of a form submission process */}
          <label htmlFor="yesOption">Yes</label>
          <input type="radio" id="yesOption" name="confirmation" value="Yes" onChange={handleInput}/>
          <label htmlFor="noOption">No</label>
          <input type="radio" id="noOption" name="confirmation" value="No" onChange={handleInput}/>
        </div>
        <div className="father">
          <div className="top">
            <h3>(C) Teaching Experience (After PhD) </h3>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Position</th>
                  <th>Employer</th>
                  <th>Course Taught</th>
                  <th>No. of PG/UG Students</th>
                  <th>Date of Joining the Institute</th>
                  <th>Date of Leaving the Institute</th>
                  <th>Duration (in years & months)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <input type="text"
                    name="teachposition1"
                    onChange={handleInput} />
                  </td>
                  <td>
                    <input type="text" 
                    name="teachemployer1"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="text" 
                    name="teachcourse1"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="number" 
                    name="teachnumofstud1"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="date" 
                    name="teachjoiningdate1"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="date" 
                    name="teachleavingdate1"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="text" 
                    name="teachduration1"
                    onChange={handleInput}/>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <input type="text" 
                    name="teachposition2"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="text" 
                    name="teachemployer2"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="text" 
                    name="teachcourse2"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="number" 
                    name="teachnumofstud2"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="date" 
                    name="teachjoiningdate2"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="date" 
                    name="teachleavingdate2"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="text" 
                    name="teachduration2"
                    onChange={handleInput}/>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="father">
          <div className="top">
            <h3>
              (D) Research Experience (Post PhD, including Post Doctoral){" "}
            </h3>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Position</th>
                  <th>Institute</th>
                  <th>Supervisor</th>
                  <th>Date of Joining</th>
                  <th>Date of Leaving</th>
                  <th>Duration (in years & months)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <input type="text" 
                    name="resposition1"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="text" 
                    name="resinstitute1"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="text" 
                    name="ressupervisor1"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="date" 
                    name="resjoiningdate1"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="date" 
                    name="resleavingdate1"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="text" 
                    name="resduration1"
                    onChange={handleInput}/>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <input type="text" 
                    name="resposition2"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="text" 
                    name="resinstitute2"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="text" 
                    name="ressupervisor2"
                    onChange={handleInput}/>
                  </td>

                  <td>
                    <input type="date" 
                    name="resjoiningdate2"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="date" 
                    name="resleavingdate2"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="text" 
                    name="resduration2"
                    onChange={handleInput}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="father">
          <div className="top">
            <h3>(E) Industrial Experience </h3>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Organization</th>
                  <th>Work Profile</th>
                  <th>Date of Joining</th>
                  <th>Date of Leaving</th>
                  <th>Duration (in years & months)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <input type="text" 
                    name="exorganization1"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="text" 
                    name="exprofile1"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="date" 
                    name="exjoiningdate1"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="date" 
                    name="exleavingdate1"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="text" 
                    name="exduration1"
                    onChange={handleInput}/>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <input type="text" 
                    name="exorganization2"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="text" 
                    name="exprofile2"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="date" 
                    name="exjoiningdate2"
                    onChange={handleInput}/>
                  </td>

                  <td>
                    <input type="date" 
                    name="exleavingdate2"
                    onChange={handleInput}/>
                  </td>
                  <td>
                    <input type="text" 
                    name="exduration2"
                    onChange={handleInput}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="containerrrr">
          <div class="text-areaaa" id="specialization">
            <h2>Areas of specialization</h2>
            {/* <!-- Placeholder for actual content --> */}
            <textarea name="specialization" rows="13" cols="60" onChange={handleInput}>
              {" "}
            </textarea>
          </div>
          <div class="text-areaaa" id="research">
            <h2>Current Area of research</h2>
            {/* <!-- Placeholder for actual content --> */}
            <textarea name="research" rows="13" cols="60" onChange={handleInput}>
              3/13 Genesis Spur
            </textarea>
          </div>
        </div>
      </div>
      <div className="footer">
      <div className="log">
            <button className="button mybutton"
            type="submit"
            onClick={handleSubmit}>
            SAVE & NEXT
          </button>
          </div>
      </div>
    </>
  );
};

export default Page3;
