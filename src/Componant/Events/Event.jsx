import React from "react";
import EventData from "./EventData";
import "./event.css";
function Event(props) {
  return (
    <>
      <div class="card">
        <img src={props.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.desc}</p>
          <div className=" event-btn">
            <button>Read More</button>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span>
              <i class="fa-solid fa-calendar-days"></i>
              {props.date}
            </span>
            <span>
              <i class="fa-regular fa-clock"></i>
              {props.time}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Event;
