import { useState } from "react";
import axios from "axios";
import WeatherInfo from "./Components/WeatherInfo";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [timeoutId, setTimeoutId] = useState();
  const [weatherList, setWeatherList] = useState();

  const fetchData = async (searchString) => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=62510fd6820a495880f21357223005&q=${searchString}&days=5&aqi=no&alerts=no`
    );
    setWeatherList(response.data);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    setSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    setTimeoutId(timeout);
  };

  return (
    <div className="app">
      <div id="searchBox">
        <img id="searchIcon" src="/search-icon.svg" alt="" />
        <input
          type="text"
          id="searchInput"
          placeholder="Search"
          value={searchQuery}
          onChange={onTextChange}
        />
      </div>
      <div className="container">
        <WeatherInfo item={weatherList ? weatherList : {}} />
      </div>
    </div>
  );
}

export default App;
