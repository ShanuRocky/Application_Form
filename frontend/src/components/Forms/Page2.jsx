import "./Form.css";
import IITPLogo from "../assets/IITp.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";



const Page2 = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "1234kumarshanu9@gmail.com",
      university: "",
      department: "",
      nameofphdsupervisor: "",
      yearofjoining: "",
      dateofsuccess: "2024-04-01",
      dateofaward: "2024-04-01",
      title: "",
      mdegree: "",
      muniversity: "",
      mbranch: "",
      myearofjoining: "",
      myearofcompletion: "",
      mduration: "",
      mpercentage: "",
      mdivision: "",
      bdegree: "",
      buniversity: "",
      bbranch: "",
      byearofjoining: "",
      byearofcompletion: "",
      bduration: "",
      bpercentage: "",
      bdivision: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setErrors(form_validation(values)); //to do - ujjawal bkl, yeh tu kar
      if (true)
      {
      axios.post("http://localhost:8081/page2", values)
           .then((res) => {
            console.log(res.data);
             if(res.data === "success") navigate("/page3");
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
        {/* edihrvgorjirjg */}
        <div className="father">
          <div className="top">
            <h3>(A) Details of PhD* </h3>
          </div>
          <div className="personal-details">
            <form className="form-container" action="/submit" method="post">
              <div className="main">
                <label for="university">University/Institute</label>
                <input type="text" id="university" name="university"
                onChange={handleInput} />
              </div>
              <div className="main">
                <label for="Department">Department</label>
                <input type="text" id="Department" name="department" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="nameofPhdsupervisor">Name Of Phd Supervisor</label>
                <input type="text" id="nameofPhdsupervisor" name="nameofphdsupervisor" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="yearofjoining">Year Of Joining</label>
                <input type="text" id="yearofjoining" name="yearofjoining" 
                onChange={handleInput}/>
              </div>
              <div className="main">
          <label for="dateofsuccessfulthesisdefence">Date of Successful Thesis Defence</label>
          <input type="date" id="dateofsuccessfulthesisdefence" value="2024-04-01"
           />
        </div>
        <div className="main">
          <label for="dateofaward">Date of Award</label>
          <input type="date" id="dateofaward" value="2024-04-01" />
        </div>
              <div className="main">
                <label for="title">Title of PhD Thesis</label>
                <input type="text" id="title" name="title" 
                onChange={handleInput}/>
              </div>
            </form>
          </div>
        </div>
        
        <div className="father">
          <div className="top">
            <h3>(B) Academic Details - M. Tech./ M.E./ PG Details </h3>
          </div>
          <div className="personal-details">
            <form className="form-container" action="/submit" method="post">
              <div className="main">
                <label for="Degree/Certificate">Degree/Certificate</label>
                <input type="text" id="Degree/Certificate" name="mdegree" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="University/Institute">University/Institute</label>
                <input type="text" id="University/Institute" name="muniversity" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="Branch/Stream">Branch/Stream</label>
                <input type="text" id="Branch/Stream" name="mbranch" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="yearofjoining">Year Of Joining</label>
                <input type="text" id="yearofjoining" name="myearofjoining" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="YearofCompletion">Year of Completion</label>
                <input type="text" id="YearofCompletion" name="myearofcompletion" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="Duration">Duration</label>
                <input type="text" id="Duration" name="mduration" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="Percentage/CGPA">Percentage/CGPA</label>
                <input type="text" id="Percentage/CGPA" name="mpercentage" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="Division/Class">Division/Class</label>
                <input type="text" id="Division/Class" name="mdivision" 
                onChange={handleInput}/>
              </div>
            </form>
          </div>
        </div>

        <div className="father">
          <div className="top">
            <h3>(C) Academic Details - B. Tech /B.E. / UG Details * </h3>
          </div>
          <div className="personal-details">
            <form className="form-container" action="/submit" method="post">
              <div className="main">
                <label for="Degree/Certificate">Degree/Certificate</label>
                <input type="text" id="Degree/Certificate" name="bdegree" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="University/Institute">University/Institute</label>
                <input type="text" id="University/Institute" name="buniversity" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="Branch/Stream">Branch/Stream</label>
                <input type="text" id="Branch/Stream" name="bbranch" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="yearofjoining">Year Of Joining</label>
                <input type="text" id="yearofjoining" name="byearofjoining" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="YearofCompletion">Year of Completion</label>
                <input type="text" id="YearofCompletion" name="byearofcompletion" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="Duration">Duration</label>
                <input type="text" id="Duration" name="bduration" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="Percentage/CGPA">Percentage/CGPA</label>
                <input type="text" id="Percentage/CGPA" name="bpercentage" 
                onChange={handleInput}/>
              </div>
              <div className="main">
                <label for="Division/Class">Division/Class</label>
                <input type="text" id="Division/Class" name="bdivision" 
                onChange={handleInput}/>
              </div>
            </form>
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

export default Page2;
