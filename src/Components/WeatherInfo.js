//Object to convert the number of day to string
const getDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WeatherInfo = (props) => {
  const { days } = props?.item;
  return (
    <div className="weatherList">
      {days?.slice(0, 5).map((item, index) => (
        <div className="weatherItem" key={index}>
          <div className="weatherDay">
            {/*Returns the day of the week (0–6) for the specified date according to local time.*/}
            {getDay[new Date(item.datetime).getDay()]}{" "}
          </div>
          <img className="weatherIcon" src={`/icon/${item.icon}.png`} alt="" />
          <div className="temperature">
            <div className="weatherMax">
              {item.tempmax}
              <sup>o</sup>
            </div>
            <div className="weatherMin">
              {item.tempmin}
              <sup>o</sup>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherInfo;
