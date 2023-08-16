import Event from "./Event";

const EventList = ({events}) => {
  return (
    <ul id="event-list" data-testid="event-list">
      {events
        ? events.map((event, index) => <Event event={event} key={index} />)
        : null}
    </ul>
  );
};

export default EventList;
