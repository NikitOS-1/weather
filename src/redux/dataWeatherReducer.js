import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "dataWeather/fetchWeather",
  async function (_, { rejectWithValue, getState }) {
    try {
      let url = "https://api.openweathermap.org/data/2.5/weather?q=";
      let nameCity = initialState.enter;
      let api = "&appid=c66753bbdac258596336769aae208ad1";
      const respons = await fetch(`${url}${nameCity}${api}`);
      const data = await respons.json();
      console.log(data);
      // throw new Error("Error Server")
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  enter: null,
  name: null,
};

const dataWeather = createSlice({
  name: "dataWeather",
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.enter = action.payload;
    },
  },
  extraReducers: (bulder) => {
    bulder
      .addCase(fetchWeather.pending, (state, action) => {})
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.name = action.payload.name;
      })
      .addCase(fetchWeather.rejected, (state, action) => {});
  },
});

export const { changeCity } = dataWeather.actions;
export default dataWeather;
