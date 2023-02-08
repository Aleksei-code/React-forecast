import React from "react";

const WeatherComponent = (props) => {
  const { weather } = props;
  const imgLink =
    "http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png";
  return (
    <>
      <div className="weatherContainer">
        <div className="location">{`${weather.sys.country}, ${weather.name}`}</div>
        <div className="icon">
          <img alt="Текущая погода" src={imgLink} />
        </div>
        <div className="temp">
          <span>{`${Math.floor(weather.main.temp)}°C`}</span>
          {`  |  ${weather.weather[0].description}`}
        </div>
      </div>
    </>
  );
};

export default WeatherComponent;
