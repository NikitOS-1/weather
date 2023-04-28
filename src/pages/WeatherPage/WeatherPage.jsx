import InputSearch from "../../components/InputSearch/InputSearch";
import BodyWeather from "../../components/BodyWeather/BodyWeather";
import style from "./WeatherPage.module.scss";

const WeatherPage = () => {
  return (
    <div className={style.wrap}>
      <InputSearch />
      <BodyWeather />
    </div>
  );
};

export default WeatherPage;
