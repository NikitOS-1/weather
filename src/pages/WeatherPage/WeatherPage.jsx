import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCity, fetchWeather } from "../../redux/dataWeatherReducer";

const WeatherPage = () => {
  const {
    status,
    error,
    selectCity,
    name,
    temp,
    country,
    weatherMain,
    weatherDesc,
    wind,
  } = useSelector((i) => i.dataWeather);

  const dispatch = useDispatch();

  const [city, setCity] = useState("");

  const enterCity = () => {
    setCity("");
    dispatch(changeCity(city));
    dispatch(fetchWeather());
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      enterCity();
    }
  };
  return (
    <div>
      <input
        onKeyDown={handleKeyPress}
        type="text"
        value={city}
        onChange={(e) => setCity((prev) => (prev = e.target.value))}
      />
      <button onClick={enterCity}>Search</button>
      <br />
      {status == "loading" ? <p>Loading . . . </p> : null}
      {error}
      <br />
      {name}
      {country}
      <br />
      {temp ? Math.floor(temp) + "°C" : null}
      <br />
      {weatherMain}
      <br />
      {weatherDesc}
      <br />
      {wind ? wind + " m/s." : null}
    </div>
  );
};

export default WeatherPage;
