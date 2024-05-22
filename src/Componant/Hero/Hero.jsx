import React, { useEffect, useState } from "react";
import "./hero.css";

function Hero() {
  const [scrollpage, setscrollpage] = useState(false);
  const [color, setcolor] = useState("");
  useEffect(() => {
    setInterval(() => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      setcolor(randomColor);
    }, 3000);
  }, []);
  useEffect(() => {
    function handlescroll() {
      if (window.scrollY > 100) {
        setscrollpage(true);
      } else {
        setscrollpage(false);
      }
    }
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="hero">
        <div className="hero-contant">
          <h3 style={{ textShadow: `2px 2px 4px ${color}` }}>
            Institute of Professional <br />
            <span>Studies Bajaur </span> <span style={{ color }}>(R)</span>
          </h3>
          <h4>Affiliated with Govt. of Khyber Pakhtunkhwa BTE and TTB</h4>

          {scrollpage && (
            <span onClick={scrollTop}>
              <i class="fa-solid fa-arrow-up"></i>
            </span>
          )}
        </div>
        <div className="btn hero-btn" style={{ border: `3px solid ${color}` }}>
          <button type="submit">Learn More about our Services</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
