import React, { useState } from "react";
import choseImg from "../../images/choseImage.jpg";
import "./choseus.css";
import ReactPlayer from "react-player";
function ChoseUs() {
  const [video, setvideo] = useState(false);
  const choseContant =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nulla facere quae corrupti qui labore repellat neque provident pariatur quos itaque, non repudiandae, ut debitis et quam commodi. Repellendus exercitationem libero, nostrum fugiat quo suscipit tempora earum omnis placeat hic eveniet harum fuga id odio? Libero sed ullam dignissimos inventore expedita assumenda eos earum optio! Facilis architecto delectus obcaecati modi.";

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6  col-lg-6">
            <div className="chose-image">
              {video ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=hRaEQUX_-mQ"
                  width="100%"
                  controls
                />
              ) : (
                <img src={choseImg} alt="" className="w-100" />
              )}

              {!video && (
                <span className="play-icon">
                  <i
                    class="fa-solid fa-circle-play"
                    onClick={() => setvideo(!video)}
                  ></i>
                </span>
              )}
            </div>
          </div>
          <div className="col-sm-6 col-lg-6">
            <div className="choseUs-contant">
              <h1>Why Chose Us</h1>
              <p>{choseContant}</p>
            </div>
            <div className="chose-btn">
              <button type="submit">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChoseUs;
