// src/components/Event.js
import {useState} from "react";

const Event = ({event}) => {
  // console.log("Event data:", event);
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <li>
      <div className="event">
        <h2>{event.summary}</h2>
        {/* <div className="name">{event.summary}</div> */}
        <div className="location">{event.location} </div>
        <div className="dateTime">{event.start.dateTime}</div>
        {showDetails && <div className="description">{event.description}</div>}
        <button className="details-btn" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </li>
  );
};

export default Event;
