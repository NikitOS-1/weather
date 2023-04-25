import { useSelector } from "react-redux";

const WeatherPage = () => {
  const data = useSelector((i) => i.dataWeather.data);

  return <div>{data}</div>;
};

export default WeatherPage;
