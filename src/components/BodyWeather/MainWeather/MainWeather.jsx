import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
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
  } = useSelector((i) => i.dataWeather);
  //   https://openweathermap.org/img/wn/10d@2x.png
  if (status == "loading") {
    return <CircularProgress />;
  }
  return (
    <div>
      <div>{`${name} ,${country}`}</div>
      <div>
        {<ThermostatIcon />}
        {temp ? Math.floor(temp) + "°C" : null}
      </div>
      <div>{weatherMain == "Clouds" ? <CloudIcon /> : null}</div>
      <div>{weatherMain == "Rain" ? <ThunderstormIcon /> : null}</div>
      <div>{weatherMain == "Sun" ? <WbSunnyIcon /> : null}</div>
      <div>{weatherMain == "Winter" ? <AcUnitIcon /> : null}</div>

      <div>{weatherDesc}</div>
      <div>
        {<AirIcon />}
        {wind ? wind + " m/s." : null}
      </div>
    </div>
  );
};
export default MainWeather;
