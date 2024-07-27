function WeatherDisplay({ weather }) {
  if (!weather) return null;

  const { name, main, weather: weatherDetails } = weather;
  const { temp } = main;
  const { description, icon } = weatherDetails[0];

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{temp}°C</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
    </div>
  );
}

export default WeatherDisplay;
