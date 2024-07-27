import React from "react";

function ForecastDisplay({forecast}) {
  if (!forecast) return null;

  const forecastItems = forecast.list.slice(0, 5).map((item, index) => {
    const { dt_txt, main, weather } = item;
    return (
      <div key={index}>
        <p>{dt_txt}</p>
        <p>{weather[0].description}</p>
        <p>{main.temp}°C</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
      </div>
    );
  });

  return <div>{forecastItems}</div>;
}

export default ForecastDisplay;
