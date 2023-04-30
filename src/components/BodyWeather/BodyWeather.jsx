import { useSelector } from "react-redux";
import style from "./BodyWeather.module.scss";
import { CircularProgress, Skeleton } from "@mui/material";
import MainWeather from "./MainWeather/MainWeather";

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
  if (selectCity == null && error == null) {
    return (
      <div className={style.wrap}>{`Weather for you 
    "Enter the city where you want to know the weather "`}</div>
    );
  } else {
    return <div className={style.wrap}>{error ? error : <MainWeather />}</div>;
  }
};
export default BodyWeather;
