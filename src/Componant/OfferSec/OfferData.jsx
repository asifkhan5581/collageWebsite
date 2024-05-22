import React from "react";
import Offer from "./Offer";
import image1 from "../../images/onlineCources.png";
import image2 from "../../images/programing.png";
import image3 from "../../images/compus.png";
import "./offfer.css";
function OfferData() {
  return (
    <>
      <div className="offer">
        <div className="offer-cont ">
          <h1>What We Offer</h1>
          <p>
            Teachzy offers students the best of education and entertainment
            opportunities available in the area. We are glad to take care of
            every student and university entrant.
          </p>
        </div>
        <div className="container ">
          <div className="row">
            <div className=" col-md-6 col-lg-4">
              <Offer
                image={image1}
                title="Online Education"
                desc="IPS provides online education services with all learning materials and lectures available to you."
              ></Offer>
            </div>
            <div className=" col-md-6 col-lg-4">
              <Offer
                image={image2}
                title="Programs & Courses"
                desc="We offer a wide range of courses and programs that encompass lots of knowledge spheres."
              ></Offer>
            </div>
            <div className=" col-md-6 col-lg-4">
              <Offer
                image={image3}
                title="Campus Events"
                desc="Our campus is the hub to a talented and diverse student community that turns opportunities into success."
              ></Offer>
            </div>
            <div className=" col-md-6 col-lg-4">
              <Offer
                image={image3}
                title="Campus Events"
                desc="Our campus is the hub to a talented and diverse student community that turns opportunities into success."
              ></Offer>
            </div>
            <div className=" col-md-6 col-lg-4">
              <Offer
                image={image3}
                title="Campus Events"
                desc="Our campus is the hub to a talented and diverse student community that turns opportunities into success."
              ></Offer>
            </div>
            <div className=" col-md-6 col-lg-4">
              <Offer
                image={image3}
                title="Campus Events"
                desc="Our campus is the hub to a talented and diverse student community that turns opportunities into success."
              ></Offer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferData;
