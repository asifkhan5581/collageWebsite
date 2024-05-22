import React from "react";
import "./TopHeader.css";
import logo from "../../../images/logo.jpg";
function Topheader() {
  const Email = <i class="fa-regular fa-envelope"></i>;
  const phone = <i class="fa-solid fa-phone-volume"></i>;
  return (
    <>
      <div className="top-header">
        <div className="top-contant">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="contant">
            <h1>
              Institute of Professional <br /> Studies Bajaur R
            </h1>

            <p>Affiliated with Govt. of Khyber Pakhtunkhwa BTE and TTB</p>
          </div>
        </div>
        <div className="top-contact">
          <h3>
            <span>{Email}</span>example123@Email.com
          </h3>
          <h2>
            <span>{phone}</span>phone:+92 233834982
          </h2>
          {/* <div className="registration-button">
            <button type="submit" className="reg-btnn">
              Sign In
            </button>
            <button type="submit" className="reg-btnn">
              Sign Up
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Topheader;
