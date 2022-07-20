//Object to convert the number of day to string
import React from "react";
import { Weather } from "../interface";
const ConvertDate = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

interface Props {
  weatherList: Weather[];
}

const WeatherInfo: React.FC<Props> = (props) => {
  const { weatherList } = props;
  return (
    <div className="flex flex-row w-700 p-5 mt-5 bg-semiWhite">
      {weatherList.slice(0, 5).map((item, index) => (
        <div
          className="flex flex-col items-center justify-center w-1/4 h-38 border-r border-solid border-itemColor my-3 text-center text-semiblack leading-normal first:text-itemFirst  last:border-r-0"
          key={index}
        >
          <div className="mb-3 font-medium">
            {/*Returns the day of the week (0–6) for the specified date according to local time.*/}
            {ConvertDate[new Date(item.datetime).getDay()]}
          </div>
          <img
            className="w-12 h-12 object-cover mb-3"
            src={`/icon/${item.icon}.png`}
            alt=""
          />
          <div className="flex flex-col p-2">
            <div className="font-semibold">
              {item.tempmax}
              <sup> o</sup>C
            </div>
            <div>
              {item.tempmin}
              <sup> o</sup>C
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherInfo;
