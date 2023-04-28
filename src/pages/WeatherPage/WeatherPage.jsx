import InputSearch from "../../components/InputSearch/InputSearch";
import BodyWeather from "../../components/BodyWeather/BodyWeather";
import style from "./WeatherPage.module.scss";

const WeatherPage = () => {
  return (
    <main className={style.wrap}>
      <InputSearch />
      <BodyWeather />
    </main>
  );
};

export default WeatherPage;
