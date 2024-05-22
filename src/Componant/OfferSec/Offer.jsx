import React from "react";
import "./offfer.css";
function Offer(props) {
  return (
    <>
      <div className="main-offer">
        <div className="offer-contant">
          <img src={props.image} alt="" />
          <div className="contant">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
