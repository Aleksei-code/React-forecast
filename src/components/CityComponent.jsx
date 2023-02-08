import React from "react";

const CityComponent = (props) => {
  const { setCity, fetchWeather, error } = props;
  return (
    <>
      <p>Введите название города</p>
      <form onSubmit={fetchWeather}>
        <input
          onChange={(e) => setCity(e.target.value)}
          placeholder="Введите название..."
        />
        <button className="card-more" type="submit">
          Найти
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </>
  );
};
export default CityComponent;
