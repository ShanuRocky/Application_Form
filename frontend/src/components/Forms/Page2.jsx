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
                <input type="text" id="university" name="university" />
              </div>
              <div className="main">
                <label for="Department">Department</label>
                <input type="text" id="Department" name="Department" />
              </div>
              <div className="main">
                <label for="nameofPhdsupervisor">Name Of Phd Supervisor</label>
                <input type="text" id="nameofPhdsupervisor" name="nameofPhdsupervisor" />
              </div>
              <div className="main">
                <label for="yearofjoining">Year Of Joining</label>
                <input type="text" id="yearofjoining" name="yearofjoining" />
              </div>
              <div className="main">
          <label for="dateofsuccessfulthesisdefence">Date of Successful Thesis Defence</label>
          <input type="date" id="dateofsuccessfulthesisdefence" value="2024-04-01" />
        </div>
        <div className="main">
          <label for="dateofaward">Date of Award</label>
          <input type="date" id="dateofaward" value="2024-04-01" />
        </div>
              <div className="main">
                <label for="title">Title of PhD Thesis</label>
                <input type="text" id="title" name="title" />
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
                <input type="text" id="Degree/Certificate" name="Degree/Certificate" />
              </div>
              <div className="main">
                <label for="University/Institute">University/Institute</label>
                <input type="text" id="University/Institute" name="University/Institute" />
              </div>
              <div className="main">
                <label for="Branch/Stream">Branch/Stream</label>
                <input type="text" id="Branch/Stream" name="Branch/Stream" />
              </div>
              <div className="main">
                <label for="yearofjoining">Year Of Joining</label>
                <input type="text" id="yearofjoining" name="yearofjoining" />
              </div>
              <div className="main">
                <label for="YearofCompletion">Year of Completion</label>
                <input type="text" id="YearofCompletion" name="YearofCompletion" />
              </div>
              <div className="main">
                <label for="Duration">Duration</label>
                <input type="text" id="Duration" name="Duration" />
              </div>
              <div className="main">
                <label for="Percentage/CGPA">Percentage/CGPA</label>
                <input type="text" id="Percentage/CGPA" name="Percentage/CGPA" />
              </div>
              <div className="main">
                <label for="Division/Class">Division/Class</label>
                <input type="text" id="Division/Class" name="Division/Class" />
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
                <input type="text" id="Degree/Certificate" name="Degree/Certificate" />
              </div>
              <div className="main">
                <label for="University/Institute">University/Institute</label>
                <input type="text" id="University/Institute" name="University/Institute" />
              </div>
              <div className="main">
                <label for="Branch/Stream">Branch/Stream</label>
                <input type="text" id="Branch/Stream" name="Branch/Stream" />
              </div>
              <div className="main">
                <label for="yearofjoining">Year Of Joining</label>
                <input type="text" id="yearofjoining" name="yearofjoining" />
              </div>
              <div className="main">
                <label for="YearofCompletion">Year of Completion</label>
                <input type="text" id="YearofCompletion" name="YearofCompletion" />
              </div>
              <div className="main">
                <label for="Duration">Duration</label>
                <input type="text" id="Duration" name="Duration" />
              </div>
              <div className="main">
                <label for="Percentage/CGPA">Percentage/CGPA</label>
                <input type="text" id="Percentage/CGPA" name="Percentage/CGPA" />
              </div>
              <div className="main">
                <label for="Division/Class">Division/Class</label>
                <input type="text" id="Division/Class" name="Division/Class" />
              </div>
            </form>
          </div>
        </div>


        
        <div className="father">
          <div className="top">
            <h3>(D) Academic Details - School * </h3>
          </div>
          
        </div>



        
        <div className="father">
          <div className="top">
            <h3>(E) Additional Educational Qualification (If any) </h3>
          </div>
          
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
