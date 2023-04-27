import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCity, fetchWeather } from "../../redux/dataWeatherReducer";

const WeatherPage = () => {
  const { status, error, selectCity, name, temp, country } = useSelector(
    (i) => i.dataWeather
  );
  const dispatch = useDispatch();

  const [city, setCity] = useState("");

  const enterCity = () => {
    dispatch(changeCity(city));
    dispatch(fetchWeather());
  };
  console.log({ status, error, selectCity, name, temp });
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity((prev) => (prev = e.target.value))}
      />
      <button onClick={enterCity}>Search</button>
      <br />
      {error}
      <br />
      {name}
      {country}
      <br />
      {temp}
    </div>
  );
};

export default WeatherPage;
