import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCity, fetchWeather } from "../../redux/dataWeatherReducer";

const WeatherPage = () => {
  const { status, error, selectCity, data } = useSelector((i) => i.dataWeather);
  const dispatch = useDispatch();

  const [city, setCity] = useState("");

  const enterCity = () => {
    dispatch(changeCity(city));
    dispatch(fetchWeather());
  };

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);
  console.log({ status, error, selectCity, data });
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity((prev) => (prev = e.target.value))}
      />
      <button onClick={enterCity}>Search</button>
      <br />
      {selectCity}
      <br />
      {error}
      <br />
      {status}
      <br />
      {data}
      <br />
    </div>
  );
};

export default WeatherPage;
