import { createSlice } from '@reduxjs/toolkit';
import { getUser, logOut, loginUser, registerUser } from './authOperations';

const initialState = {
  token: null,
  isLoading: false,
  isError: false,
  isAuth: false,
  user: {},
};

export const authSLice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.isAuth = true;
        state.user = payload.user;
      })
      .addCase(loginUser.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.isAuth = true;
        state.user = payload.user;
      })
      .addCase(registerUser.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.user = payload.user;
      })
      .addCase(getUser.rejected, () => initialState)
      .addCase(logOut.fulfilled, () => initialState);
  },
});

export const authReducer = authSLice.reducer;
