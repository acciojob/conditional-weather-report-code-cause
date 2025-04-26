import React from "react";

const DisplayWeather = ({ weather }) => {
  const { temperature, conditions } = weather;

  const tempStyles = {
    color: temperature > 20 ? "red" : "blue"   // ✅ Correct logic (red for >20)
  };

  return (
    <div>
      <p>
        Temperature: <span style={tempStyles}>{temperature}</span>
      </p>
      <p>
        Conditions: {conditions}
      </p>
    </div>
  );
};

export default DisplayWeather;
