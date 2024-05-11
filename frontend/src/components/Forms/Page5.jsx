import "./Form.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
    
   
    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();
        // setErrors(form_validation(values)); //to do - ujjawal bkl, yeh tu kar
        if (true) {
            navigate("/page4");
        //  axios.post("http://localhost:8081/page1", values)
        //       .then((res) => {
        //         if(res.data === "success") navigate("/page2");
        //         else alert("please fill the necessary fields");
        //       })
        //       .catch((err) => console.log(err));
        //     }
      }
      }

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
            <h3>
              14. Significant research contribution and future plans *(not more
              than 500 words) (Please provide a Research Statement describing
              your research plans and one or two specific research projects to
              be conducted at IIT Indore in 2-3 years time frame){" "}
            </h3>
          </div>
          <div className="text-editor">
            <div className="toolbar">
              <button>
                <b>B</b>
              </button>
              <button>
                <i>I</i>
              </button>
              <button>
                <u>U</u>
              </button>
              <button>
                <s>S</s>
              </button>
              <button>Link</button>
              <button>Align Left</button>
              <button>Center Align</button>
              <button>Align Right</button>
              <button>Numbered List</button>
              <button>Bulleted List</button>
            </div>
            <textarea className="tarea" />
          </div>
        </div>
        <div className="father">
          <div className="top">
            <h3>
              15. Significant teaching contribution and future plans * (Please
              list UG/PG courses that you would like to develop and/or teach at
              IIT Indore){" "}
            </h3>
          </div>
          <div className="text-editor">
            <div className="toolbar">
              <button>
                <b>B</b>
              </button>
              <button>
                <i>I</i>
              </button>
              <button>
                <u>U</u>
              </button>
              <button>
                <s>S</s>
              </button>
              <button>Link</button>
              <button>Align Left</button>
              <button>Center Align</button>
              <button>Align Right</button>
              <button>Numbered List</button>
              <button>Bulleted List</button>
            </div>
            <textarea className="tarea" />
          </div>
        </div>
        <div className="father">
          <div className="top">
            <h3>16. Any other relevant information.</h3>
          </div>
          <div className="text-editor">
            <div className="toolbar">
              <button>
                <b>B</b>
              </button>
              <button>
                <i>I</i>
              </button>
              <button>
                <u>U</u>
              </button>
              <button>
                <s>S</s>
              </button>
              <button>Link</button>
              <button>Align Left</button>
              <button>Center Align</button>
              <button>Align Right</button>
              <button>Numbered List</button>
              <button>Bulleted List</button>
            </div>
            <textarea className="tarea" />
          </div>
        </div>
        <div className="father">
          <div className="top">
            <h3>17. Professional Service : Editorship/Reviewership</h3>
          </div>
          <div className="text-editor">
            <div className="toolbar">
              <button>
                <b>B</b>
              </button>
              <button>
                <i>I</i>
              </button>
              <button>
                <u>U</u>
              </button>
              <button>
                <s>S</s>
              </button>
              <button>Link</button>
              <button>Align Left</button>
              <button>Center Align</button>
              <button>Align Right</button>
              <button>Numbered List</button>
              <button>Bulleted List</button>
            </div>
            <textarea className="tarea" />
          </div>
        </div>
        <div className="father">
          <div className="top">
            <h3>
              18. Detailed List of Journal Publications (Including Sr. No.,
              Author's Names, Paper Title, Volume, Issue, Year, Page Nos.,
              Impact Factor (if any), DOI, Status[Published/Accepted] )
            </h3>
          </div>
          <div className="text-editor">
            <div className="toolbar">
              <button>
                <b>B</b>
              </button>
              <button>
                <i>I</i>
              </button>
              <button>
                <u>U</u>
              </button>
              <button>
                <s>S</s>
              </button>
              <button>Link</button>
              <button>Align Left</button>
              <button>Center Align</button>
              <button>Align Right</button>
              <button>Numbered List</button>
              <button>Bulleted List</button>
            </div>
            <textarea className="tarea" />
          </div>
        </div>
        <div className="father">
          <div className="top">
            <h3>
              19. Detailed List of Conference Publications (Including Sr. No.,
              Author's Names, Paper Title, Name of the conference, Year, Page
              Nos., DOI [If any] )
            </h3>
          </div>
          <div className="text-editor">
            <div className="toolbar">
              <button>
                <b>B</b>
              </button>
              <button>
                <i>I</i>
              </button>
              <button>
                <u>U</u>
              </button>
              <button>
                <s>S</s>
              </button>
              <button>Link</button>
              <button>Align Left</button>
              <button>Center Align</button>
              <button>Align Right</button>
              <button>Numbered List</button>
              <button>Bulleted List</button>
            </div>
            <textarea className="tarea" />
          </div>
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
    </>
  );
};

export default Page1;