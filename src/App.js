import { useState, useRef } from "react";
import axios from "axios";
import WeatherInfo from "./Components/WeatherInfo";

function App() {
  const [weatherList, setWeatherList] = useState();
  const [loading, setLoading] = useState(false);
  const searchInput = useRef("");

  const fetchData = async (searchString) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchString}?unitGroup=metric&key=YKU5L63R464SLFNBD3FGLJC9N&contentType=json`
      );
      setWeatherList(response.data);
    } catch {
      setWeatherList();
    }
    setLoading(false);
  };

  const onPressEnter = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const search = () => {
    if (searchInput.current.value) {
      const value = searchInput.current.value;
      fetchData(value);
    }
  };

  const Container = () => {
    return (
      <>
        {!loading && weatherList && <WeatherInfo item={weatherList} />}
        {loading && <div className="inputLoading">Loading...</div>}
        {!loading && !weatherList && searchInput.current.value && (
          <div className="inputMessage">
            No data available <br /> Invalid location found. Please check your
            location parameter: {searchInput.current.value}
          </div>
        )}
      </>
    );
  };

  return (
    <div id="app">
      <h1 id="title">Weather Forecast App</h1>
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
      <Container />
    </div>
  );
}

export default App;
