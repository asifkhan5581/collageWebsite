import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import "./Counter.css";
function Counter() {
  const [countOn, setcountOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setcountOn(true)}
        onExit={() => setcountOn(false)}
      >
        <div className="counter">
          <div className="counter-contant">
            <h1>
              {countOn && (
                <CountUp start={0} end={12} delay={0} duration={2}></CountUp>
              )}
              k
            </h1>
            <h3>Page Viewers</h3>
          </div>
          <div className="counter-contant">
            <h1>
              {countOn && (
                <CountUp start={0} end={1500} delay={0} duration={2}></CountUp>
              )}
              +
            </h1>
            <h3>Student's Registration</h3>
          </div>
          <div className="counter-contant">
            <h1>
              {countOn && (
                <CountUp start={0} end={80} delay={0} duration={2}></CountUp>
              )}
              %
            </h1>
            <h3>Sucess Projects</h3>
          </div>

          <div className="counter-contant">
            <h1>
              {countOn && (
                <CountUp start={0} end={20} delay={0} duration={2}></CountUp>
              )}
              +
            </h1>

            <h3>Our Employes</h3>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}

export default Counter;
