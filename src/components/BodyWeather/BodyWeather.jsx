import { useSelector } from "react-redux";
import style from "./BodyWeather.module.scss";
import { CircularProgress, Skeleton } from "@mui/material";

const BodyWeather = () => {
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

  return (
    <div className={style.wrap}>
      {error}
      {status == "loading" ? <CircularProgress /> : null}
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
export default BodyWeather;
