import { configureStore } from "@reduxjs/toolkit";
import dataWeather from "./dataWeatherReducer";

export const store = configureStore({
  reducer: {
    dataWeather: dataWeather.reducer,
  },
});
