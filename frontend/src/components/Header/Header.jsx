import React from "react";
import "./Header.css";
import IITPLogo from "../assets/IITp.png";

const Header = () => {
  return (
    <>
      <div className="container-header">
        <img className="iitplogo" src={IITPLogo} alt="" />
        <div className="containerr">
          <div className="hindi">भारतीय प्रौद्योगिकी संस्थान पटना</div>
          <div className="english">Indian Institute of Technology Patna</div>
        </div>
      </div>
    </>
  );
};

export default Header;
