const WeatherInfo = (props) => {
  console.log(props.item);
  const { forecast } = props?.item;
  return (
    <div className="weatherList">
      {forecast?.forecastday?.map((item, index) => (
        <div className="weatherItem" key={index}>
          <div className="weatherDay">{item.date}</div>
          <div className="weatherMin">Min: {item.day.maxtemp_c}</div>
          <div className="weatherMax">Max: {item.day.maxtemp_c}</div>
        </div>
      ))}
    </div>
  );
};

export default WeatherInfo;
