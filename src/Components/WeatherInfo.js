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
            {getDay[new Date(item.datetime).getDay()]}
          </div>
          <div className="weatherMin">Min: {item.tempmin}</div>
          <div className="weatherMax">Max: {item.tempmax}</div>
        </div>
      ))}
    </div>
  );
};

export default WeatherInfo;
