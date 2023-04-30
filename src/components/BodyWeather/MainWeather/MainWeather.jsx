import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

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

  return (
    <div>
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
export default MainWeather;
