const getDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const checkDay = {};

const WeatherInfo = (props) => {
  const { forecast } = props?.item;
  return (
    <div className="weatherList">
      {forecast?.forecastday?.map((item, index) => (
        <div className="weatherItem" key={index}>
          <div className="weatherDay">
            {getDay[new Date(item.date).getDay()]}
          </div>
          <div className="weatherMin">Min: {item.day.maxtemp_c}</div>
          <div className="weatherMax">Max: {item.day.maxtemp_c}</div>
        </div>
      ))}
    </div>
  );
};

export default WeatherInfo;
