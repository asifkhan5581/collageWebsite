import React, { useState } from "react";
import "./course.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseData from "./CourseData";
import Slider from "react-slick";
function Course() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container">
        <div className="course-contant">
          <h1>Our Featured Courses</h1>
          <p>Technical and Professional Training Center at District Bajaur</p>
        </div>

        <Slider {...settings}>
          {CourseData.map((item, ind) => {
            return (
              <div className="cart text-center" key={ind}>
                <div className="cart-top ">
                  <img src={item.image} alt="" />
                  <h1>{item.title}</h1>
                </div>
                <div className="cart-bottom text-center">
                  <p>{item.desc}</p>
                  <button className="btn course-btn">Click Me</button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Course;
