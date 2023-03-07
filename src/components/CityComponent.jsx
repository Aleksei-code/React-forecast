import React from "react";

const CityComponent = (props) => {
  const { setCity, fetchWeather, error } = props;
  return (
    <>
      <p>Enter your city name</p>
      <form onSubmit={fetchWeather}>
        <input
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
        <button className="card-more" type="submit">
          Find
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </>
  );
};
export default CityComponent;
