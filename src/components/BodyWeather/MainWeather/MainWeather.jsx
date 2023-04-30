import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import moment from "moment";
import style from "./MainWeather.module.scss";
const MainWeather = () => {
  const { status, name, temp, country, weatherMain, wind, icon } = useSelector(
    (i) => i.dataWeather
  );

  if (status == "loading") {
    return <CircularProgress />;
  }

  return (
    <div className={style.wrap}>
      <div className={style.nameCity}>
        <h1>{`${name}, ${country}`}</h1>
      </div>
      <div className={style.date}>
        <h3>{moment().format("LLLL")}</h3>
      </div>
      <div className={style.wrapWeather}>
        <div className={style.weatherIcon}>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather"
          />
        </div>

        <div className={style.temp}>
          <div>{<ThermostatIcon />}</div>
          <p>{Math.floor(temp) + "°C"}</p>
        </div>

        <div className={style.weatherDesc}>
          <p>{weatherMain}</p>
        </div>

        <div className={style.wind}>
          <div>{<AirIcon />}</div>
          <p>{wind + " m/s."}</p>
        </div>
      </div>
    </div>
  );
};
export default MainWeather;
