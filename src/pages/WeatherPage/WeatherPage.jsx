import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../redux/dataWeatherReducer";

const WeatherPage = () => {
  const nameCity = useSelector((i) => i.dataWeather.name);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather());
  }, []);
  return <div>{nameCity}</div>;
};

export default WeatherPage;
