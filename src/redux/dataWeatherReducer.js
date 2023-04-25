import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "dataWeather/fetchWeather",
  async function () {
    const respons = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Germany&appid=c66753bbdac258596336769aae208ad1"
    );
    const data = await respons.json();
    console.log(data);
    return data;
  }
);

const initialState = {
  name: null,
};

const dataWeather = createSlice({
  name: "dataWeather",
  initialState,
  reducers: {},
  extraReducers: (bulder) => {
    bulder
      .addCase(fetchWeather.pending, (state, action) => {})
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.name = action.payload.name;
      })
      .addCase(fetchWeather.rejected, (state, action) => {});
  },
});

export const {} = dataWeather.actions;
export default dataWeather;
