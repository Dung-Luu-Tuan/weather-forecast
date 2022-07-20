import { useState, useRef } from "react";
import React from "react";
import axios from "axios";
import WeatherInfo from "./Components/WeatherInfo";
import { Weather } from "./interface";

function App() {
  const [weatherList, setWeatherList] = useState<Weather[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const searchInput = useRef<HTMLInputElement>(undefined!);

  const fetchData = async (searchString: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchString}?unitGroup=metric&key=YKU5L63R464SLFNBD3FGLJC9N&contentType=json`
      );
      setWeatherList(response.data.days);
    } catch {
      setWeatherList([]);
    }
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const search = () => {
    if (searchInput.current?.value) {
      const value = searchInput.current.value;
      fetchData(value);
    }
  };

  const Container = () => {
    return (
      <>
        {loading && (
          <div className="text-semiWhite font-semibold p-4 text-base">
            Loading...
          </div>
        )}

        {!loading && weatherList.length === 0 && searchInput.current?.value && (
          <div className="text-semiWhite font-normal text-xl p-4 text-center">
            No data available <br /> Invalid location found. Please check your
            location parameter: {searchInput.current?.value}
          </div>
        )}

        {!loading && weatherList.length > 0 && <WeatherInfo weatherList={weatherList} />}
      </>
    );
  };

  return (
    <div className="flex items-center flex-col">
      <h1 className="mb-12 mt-8 text-semiWhite text-4xl font-semibold">
        Weather Forecast App
      </h1>
      <div className="flex flex-row px-2.5 py-1.5 bg-semiWhite rounded-md w-80 border-solid border border-searchColor">
        <img
          onClick={search}
          className="w-8 h-8 cursor-pointer"
          src="/search-icon.svg"
          alt=""
        />
        <input
          ref={searchInput}
          type="text"
          className="text-semiblack border-none outline-none ml-4"
          placeholder="Your city"
          onKeyPress={handleKeyPress}
        />
      </div>
      <Container />
    </div>
  );
}

export default App;
