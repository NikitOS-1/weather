import { useDispatch } from "react-redux";
import style from "./InputSearch.module.scss";
import { useState } from "react";
import { changeCity, fetchWeather } from "../../redux/dataWeatherReducer";
import { Button, TextField } from "@mui/material";

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
    <div className={style.wrap}>
      <TextField
        id="outlined-basic"
        label="Enter City"
        variant="outlined"
        onKeyDown={handleKeyPress}
        value={city}
        onChange={(e) => setCity((prev) => (prev = e.target.value))}
      />
      <Button variant="outlined" onClick={enterCity}>
        Search
      </Button>
    </div>
  );
};
export default InputSearch;
