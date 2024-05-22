import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GalleryData from "./GalleryData";
import Slider from "react-slick";
import "./gallery.css";
function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 3,
    autoplay: true,
    speed: 4000,
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
      <div className="Institute-gallery">
        <div className="gallary-contant">
          <h4>Gallery</h4>
          <h1>Our Institute Gallery</h1>
        </div>
        <Slider {...settings}>
          {GalleryData.map((item, ind) => {
            return (
              <div key={ind} className="gallery text-center">
                <img src={item.image} alt="" />
                <div className="gallery-desc">
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Gallery;
