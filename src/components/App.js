import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 25, conditions: "Sunny" });

  return (
    <div>
      <DisplayWeather weather={weather} />
    </div>
  );
};

export default App;
