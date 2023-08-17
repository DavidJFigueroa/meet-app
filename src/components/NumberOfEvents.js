import React from "react";

const NumberOfEvents = ({
  eventNumber,
  setEventNumber,
  onEventNumberChange,
  setErrorAlert,
}) => {
  const handleInputChanged = (value) => {
    const numberValue = parseInt(value); // Convert the input value to a number
    if (!isNaN(numberValue)) {
      onEventNumberChange(numberValue);
    } else {
      onEventNumberChange(32);
    }

    let errorText;
    if (isNaN(value)) {
      errorText = "Not a valid number";
    } else if (value > 100) {
      errorText = "Maximum Value is 100";
    } else if (value <= 0) {
      errorText = "Minimum Value is 1";
    } else {
      errorText = "";
      setEventNumber();
    }
    setErrorAlert(errorText);
  };

  return (
    <div data-testid="number-of-events" id="number-of-events">
      <input
        onFocus={() => {
          onEventNumberChange("");
        }}
        type="text"
        className="textbox"
        placeholder="Enter a number"
        value={eventNumber}
        onChange={(e) => handleInputChanged(e.target.value)}
      />
    </div>
  );
};
export default NumberOfEvents;
