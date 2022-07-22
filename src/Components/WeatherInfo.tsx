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
    <div className="flex flex-row w-700 p-5 mt-5 bg-semiWhite xs:w-350 xs:flex-wrap">
      {weatherList.slice(0, 5).map((item, index) => (
        <div
          className="flex flex-col items-center justify-center w-1/4 h-38 border-r border-solid border-itemColor my-3 text-center text-semiblack leading-normal first:text-itemFirst  last:border-r-0
          xs:w-full xs:flex-row xs:border-none xs:h-10 xs:justify-start"
          key={index}
        >
          <div className="mb-3 font-medium xs:w-20 xs:mr-6 xs:text-left">
            {/*Returns the day of the week (0–6) for the specified date according to local time.*/}
            {ConvertDate[new Date(item.datetime).getDay()]}
          </div>
          <img
            className="w-12 h-12 object-cover mb-3 xs:mr-6"
            src={`/icon/${item.icon}.png`}
            alt=""
          />
          <div className="flex flex-col p-2 xs:flex-row xs:mx-0">
            <div className="font-semibold xs:w-14 xs:text-left xs:mr-3">
              {item.tempmax}
              <sup> o</sup>C
            </div>
            <div className="xs:text-left">
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
