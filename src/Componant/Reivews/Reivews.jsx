import React from "react";
import ClientImage from "../../images/Gallery5.webp";
import "./Reivews.css";
function Reivews() {
  var starIcon = <i class="fa-solid fa-star"></i>;
  var clientDes =
    " The Hashir Security Services team was amazing to work with! From the early stages of planning our event to the event day itself, Hashir was very communicative, responsive and professional. He handled every situation that arose with complete care and thoroughness. Having Hashir Security Services at our  was a great choice!";
  return (
    <>
      <div className="reivews">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="reivews-client">
                <h3>Here What People Say About Us</h3>
                <h1>Client Reivews</h1>
                {/* <div className="reivews-client-img">
                  <img src={ReivewsImage} alt="" />
                  <h4>Hashir Security Services - HSS</h4>
                </div> */}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="reivews-contant">
                <p>{clientDes}</p>
                <div className="client">
                  <div className="client-name">
                    <h1>Muhammad Usman</h1>
                    <p>CEO of Catface</p>
                    <span>{starIcon}</span>
                    <span>{starIcon}</span>
                    <span>{starIcon}</span>
                    <span>{starIcon}</span>
                    <span>{starIcon}</span>
                  </div>
                  <div className="client-image">
                    <img src={ClientImage} alt="" />
                  </div>
                </div>
                <div className="reivews-button">
                  <button>
                    <span>{starIcon}</span>See All Reivews
                    <span>{starIcon}</span>
                  </button>
                  <button>
                    <span>{starIcon}</span>Write A Reivew<span>{starIcon}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reivews;
