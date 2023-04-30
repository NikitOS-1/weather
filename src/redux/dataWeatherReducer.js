import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "dataWeather/fetchWeather",
  async function (_, { rejectWithValue, getState, dispatch }) {
    try {
      let url = "https://api.openweathermap.org/data/2.5/weather?q=";
      let nameCity = getState().dataWeather.selectCity;
      let api = "&appid=c66753bbdac258596336769aae208ad1";
      let units = "&units=metric";
      let lang = "&lang=en&lang=ua&lang=ru";
      const respons = await fetch(`${url}${nameCity}${api}${units}${lang}`);
      const data = await respons.json();
      if (data.message == "city not found") {
        dispatch(removedCity());
        throw new Error("The City not found");
      }
      if (data.message == "Nothing to geocode") {
        dispatch(removedCity());
        throw new Error("Enter The City to search the weather");
      }
      // console.log(data);
      return data;
    } catch (error) {
      if (error.message == "Failed to fetch") {
        return rejectWithValue("404 : Server is not available");
      }
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  status: null,
  error: null,
  selectCity: null,
  name: null,
  temp: null,
  country: null,
  weatherMain: null,
  weatherDesc: null,
  wind: null,
  icon: null,
};

const dataWeather = createSlice({
  name: "dataWeather",
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.selectCity = action.payload;
    },
    removedCity: (state) => {
      state.selectCity = null;
      state.name = null;
      state.temp = null;
      state.country = null;
      state.weatherMain = null;
      state.weatherDesc = null;
      state.wind = null;
      state.icon = null;
    },
  },
  extraReducers: (bulder) => {
    bulder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.error = null;
        state.name = action.payload.name;
        state.temp = action.payload.main.temp;
        state.country = action.payload.sys.country;
        state.wind = action.payload.wind.speed;
        state.weatherMain = action.payload.weather[0].main;
        state.weatherDesc = action.payload.weather[0].description;
        state.icon = action.payload.weather[0].icon;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export const { changeCity, removedCity } = dataWeather.actions;
export default dataWeather;
