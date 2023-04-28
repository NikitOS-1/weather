import { useDispatch } from "react-redux";
import style from "./InputSearch.module.scss";
import { useState } from "react";
import { changeCity, fetchWeather } from "../../redux/dataWeatherReducer";

const InputSearch = () => {
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
    </div>
  );
};
export default InputSearch;
