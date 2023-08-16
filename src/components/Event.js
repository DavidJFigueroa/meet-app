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

        <div className="location">{event.location} </div>
        <div className="dateTime">{event.start.dateTime}</div>
        <button
          className="details-btn"
          onClick={() => {
            setShowDetails(!showDetails);
          }}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        {showDetails ? (
          <div className="details">
            <h4>Event Details</h4>
            <p>Description: {event.description}</p>
            <p>Event status: {event.status}</p>
          </div>
        ) : null}
      </div>
    </li>
  );
};

export default Event;
