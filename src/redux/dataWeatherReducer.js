import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "dataWeather/fetchWeather",
  async function () {
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=Odesa&appid=c66753bbdac258596336769aae208ad1";
    const respons = await fetch(url);
    const data = await respons.json();
    return data;
  }
);

const initialState = {
  data: "Not is not",
};

const dataWeather = createSlice({
  name: "dataWeather",
  initialState,
  reducers: {},
  extraReducers: (bulder) => {
    bulder
      .addCase(fetchWeather.pending, (state, action) => {})
      .addCase(fetchWeather.fulfilled, (state, action) => {})
      .addCase(fetchWeather.rejected, (state, action) => {});
  },
});

export const {} = dataWeather.actions;
export default dataWeather;
