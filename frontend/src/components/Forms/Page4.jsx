import "./Form.css";
import IITPLogo from "../assets/IITp.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pdf from "../assets/IITp.png";
import fileDownload from "js-file-download";

const Page1 = () => {

    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();
        // setErrors(form_validation(values)); //to do - ujjawal bkl, yeh tu kar
        if (true) {
          //  navigate(""); //generate pdf
         axios({
            url: "http://localhost:8081/page4",
            method: "GET",
            responseType: "blob"
         })
              .then((res) => {
                alert("congo");
                  fileDownload(res.data,"download.pdf");
                  navigate("/login");
                  alert("form filled completely");
              })
              .catch((err) => {
                  alert("lauda");
                console.log(err);
              });
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
        <div className="container20">
          <div className="header20">
            <h3>20. Reprints of 5 Best Research Papers *</h3>
          </div>
          <div className="subtitle20">
            Upload 5 Best Research Papers in a single PDF - Only by Faculty
          </div>
          <input type="text" className="file-pat20" placeholder="" />
          <button className="update-button20">Update 5 best papers</button>
          <input type="file" id="file-upload" style={{display: "inline"}} />
         
        </div>

        <div className="form-container21">
          <h2>
            21. Checklist of the documents attached with the online application
            *
          </h2>
          <p>Only PDF files will be uploaded as part of the printed form.</p>

          <div className="upload-section21">
            <label htmlFor="phd-certificate">Update PHD Certificate</label>
            <input
              type="file"
              id="phd-certificate"
            />
            <button
              onClick={() => document.getElementById("phd-certificate").click()}
            >
              Choose File
            </button>
          </div>

          <div className="upload-section21">
            <label htmlFor="marksheets-certificate">
              Update all Semester/Year Marksheets and Degree certificate
            </label>
            <input
              type="file"
              id="marksheets-certificate"
            />
            <button
              onClick={() =>
                document.getElementById("marksheets-certificate").click()
              }
            >
              Choose File
            </button>
          </div>

          <div className="upload-section21">
            <label htmlFor="other-certificate">
              Upload any other relevant document in a single PDF (For example
              award certificate, experience certificate etc) . If there are
              multiple documents, combine all the documents in a single PDF
            </label>
            <input
              type="file"
              id="other-certificate"
            />
            <button
              onClick={() =>
                document.getElementById("other-certificate").click()
              }
            >
              Choose File
            </button>
          </div>
        </div>

        <div className="upload-section21sign">
          <label htmlFor="marksheets-certificate">
            Upload your Signature JPG only{" "}
          </label>
          <input
            type="file"
            id="marksheets-certificate"
          />
          <button
            onClick={() =>
              document.getElementById("marksheets-certificate").click()
            }
          >
            Choose File
          </button>
        </div>
        <div className="father">
          <div className="top">
            <h3>Fill the Details </h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Association with Referee</th>
                <th>Institution/Organization</th>
                <th>E-mail</th>
                <th>Contact No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" name="position1" placeholder="name" />
                </td>
                <td>
                  <input
                    type="text"
                    name="organization1"
                    placeholder="position"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="joiningDate1"
                    placeholder="association"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="leavingDate1"
                    placeholder="Institute name"
                  />
                </td>
                <td>
                  <input type="text" name="Email" placeholder="Email" />
                </td>
                <td>
                  <input
                    type="number"
                    name="contact no."
                    placeholder="contact no."
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" name="position2" placeholder="name" />
                </td>
                <td>
                  <input
                    type="text"
                    name="organization2"
                    placeholder="position"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="joiningDate2"
                    placeholder="associatikon"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="leavingDate2"
                    placeholder="institute naem"
                  />
                </td>
                <td>
                  <input type="text" name="duration2" placeholder="email" />
                </td>
                <td>
                  <input
                    type="number"
                    name="contact no."
                    placeholder="contact no."
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="footer">
      <div className="log">
            <button className="button"
            onClick={handleSubmit}>
            download pdf
          </button>
          </div>
      </div>
    </>
  );
};

export default Page1;