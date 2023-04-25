import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchWeather = createAsyncThunk("fetchWeather/dataWeather", {});

const initialState = {
  data: "Not is not",
};

const dataWeather = createSlice({
  name: "dataWeather",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = dataWeather.actions;
export default dataWeather;
