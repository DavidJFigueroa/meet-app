import React, {useEffect, useState} from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import {extractLocations, getEvents} from "./api";
import NumberOfEvents from "./components/NumberOfEvents";
import "./App.css";
import {InfoAlert, ErrorAlert, WarningAlert} from "./components/Alert";

const App = () => {
  const [selectedCity, setSelectedCity] = useState("See all cities");
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [eventNumber, setEventNumber] = useState(32);
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const eventList = await getEvents();
  //       const filteredEvents =
  //         selectedCity === "See all cities"
  //           ? eventList
  //           : eventList.filter((event) => event.location === selectedCity);
  //       setEvents(filteredEvents.slice(0, eventNumber));
  //       setAllLocations(extractLocations(eventList));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, [selectedCity]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventList = await getEvents();
        const filteredEvents =
          selectedCity === "See all cities"
            ? eventList
            : eventList.filter((event) => event.location === selectedCity);
        setEvents(filteredEvents.slice(0, eventNumber));
        setAllLocations(extractLocations(eventList));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("You seem to be offline!");
    }
    fetchData();
  }, [selectedCity, eventNumber]);

  const handleCitySelected = (city, numberOfEvents) => {
    setSelectedCity(city);
    const filteredEvents = events.filter((event) => event.location === city);
    let sliced = [];
    if (city === "See all cities") {
      sliced = events.slice(0, numberOfEvents);
    } else {
      //use eventNumber if present to limit number
      sliced = filteredEvents.slice(0, numberOfEvents);
    }
    setFilteredEvents(sliced);
  };

  function onEventNumberChange(number) {
    setEventNumber(number);
    handleCitySelected(selectedCity, number);
  }

  return (
    <div className="App" style={{backgroundColor: "#f04908"}}>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <h1>Meet App</h1>
      <p>Choose your nearest city</p>
      <CitySearch
        allLocations={allLocations}
        setSelectedCity={setSelectedCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents
        eventNumber={eventNumber}
        setEventNumber={setEventNumber}
        onEventNumberChange={onEventNumberChange}
        setErrorAlert={setErrorAlert}
      />
      <EventList events={filteredEvents.length > 0 ? filteredEvents : events} />
    </div>
  );
};

export default App;
