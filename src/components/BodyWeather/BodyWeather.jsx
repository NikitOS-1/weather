import { useSelector } from "react-redux";
import style from "./BodyWeather.module.scss";

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
export default BodyWeather;
