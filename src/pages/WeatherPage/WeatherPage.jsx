import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCity, fetchWeather } from "../../redux/dataWeatherReducer";

const WeatherPage = () => {
  const nameCity = useSelector((i) => i.dataWeather.name);
  const dispatch = useDispatch();

  const [city, setCity] = useState("");

  const enterCity = () => {
    dispatch(changeCity(city));
    dispatch(fetchWeather());
  };

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity((prev) => (prev = e.target.value))}
      />
      <button onClick={enterCity}>Search</button>
      <br />
      {nameCity}
    </div>
  );
};

export default WeatherPage;
