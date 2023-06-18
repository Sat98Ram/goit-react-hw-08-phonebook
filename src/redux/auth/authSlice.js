import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: null,
    number: null,
  },
  token: null,
  isLogIn: false,
  isRefreshing: false,
};

export const authSLice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export const authReducer = createSlice.reducer;
