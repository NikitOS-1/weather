import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import moment from "moment";
const MainWeather = () => {
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
    icon,
  } = useSelector((i) => i.dataWeather);

  if (status == "loading") {
    return <CircularProgress />;
  }

  return (
    <div>
      <div>{`${name} ,${country}`}</div>
      <div>{moment().format("LLLL")}</div>
      <div>
        {<ThermostatIcon />}
        {Math.floor(temp) + "°C"}
      </div>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather"
        />
      </div>
      <div>{weatherMain}</div>
      <div>{weatherDesc}</div>
      <div>
        {<AirIcon />}
        {wind + " m/s."}
      </div>
    </div>
  );
};
export default MainWeather;
