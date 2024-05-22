import React from "react";
import "./AboutHss.css";
import AboutImage from "../../images/slide1.jpg";
import Counter from "../../Componant/Counter/Counter";

const AboutContant1 =
  " Our Company is creating a difference in the community By understanding the need of security services. we strive to make our services economical to everyone.";
const AboutContant2 =
  "  at Hashir Security Services (IPS), we understand with a newer  generation, there is complications that we must face head-on with confidence. We are built on trust and integrity with the  mindset of treating clients and employees with the highest level of honesty and professionalism.";

function AboutHss() {
  return (
    <>
      <div className="about-hss container-fluid">
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="about-content">
                <h1>About IPS</h1>
                <p>{AboutContant1}</p>
                <p>{AboutContant2}</p>
                <div className="count">
                  <Counter />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="about-image">
                <img src={AboutImage} alt="About IPS" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHss;
