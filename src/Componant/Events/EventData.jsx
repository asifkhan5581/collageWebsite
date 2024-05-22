import image1 from "../../images/event3.jpg";
import image2 from "../../images/event4.jpg";
import image3 from "../../images/event1.jpg";
import Event from "./Event";
import "./event.css";
const EventData = () => {
  return (
    <>
      <div className="events">
        <div className="events-contant">
          <h4>Don’t miss anything</h4>
          <h1>Upcoming Events</h1>
          <p>
            Every week, we organize a variety of events for our students and
            undergraduates. From webinars to creative events, there are
            activities that are always worth your attention.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <Event
                image={image1}
                title="Event1"
                desc="tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
                date="2024/11/20"
                time="10:00am"
              ></Event>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <Event
                image={image2}
                title="Event1"
                desc="tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
                date="2024/11/20"
                time="11:20am"
              ></Event>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <Event
                image={image3}
                title="Event1"
                desc="tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
                date="2024/11/20"
                time="01:05am"
              ></Event>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventData;
