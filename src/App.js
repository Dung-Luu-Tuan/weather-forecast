import { useState, useRef } from "react";
import axios from "axios";
import WeatherInfo from "./Components/WeatherInfo";

function App() {
  const [weatherList, setWeatherList] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async (searchString) => {
    setLoading(true);
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=62510fd6820a495880f21357223005&q=${searchString}&days=5&aqi=no&alerts=no`
    );
    setLoading(false);
    setWeatherList(response.data);
  };

  const onPressEnter = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const search = () => {
    const value = searchInput.current.value;
    fetchData(value);
  };

  const searchInput = useRef("");

  return (
    <div className="app">
      <div id="searchBox">
        <img onClick={search} id="searchIcon" src="/search-icon.svg" alt="" />
        <input
          ref={searchInput}
          type="text"
          id="searchInput"
          placeholder="Search"
          onKeyPress={onPressEnter}
        />
      </div>
      <div className="container">
        {!loading && weatherList && <WeatherInfo item={weatherList} />}
        {loading && "Loading..."}
      </div>
    </div>
  );
}

export default App;
