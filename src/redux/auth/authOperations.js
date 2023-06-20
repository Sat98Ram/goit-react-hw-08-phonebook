import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateAPI, token } from 'redux/http';
import { selectToken } from './authSelectors';

export const registerUser = createAsyncThunk(
  'user/signup',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await privateAPI.post('/users/signup', body);
      token.set(data.token);
      return data;
    } catch (err) {
      return rejectWithValue();
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await privateAPI.post('/users/login', body);
      token.set(data.token);
      return data;
    } catch (err) {
      return rejectWithValue();
    }
  }
);

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const tokenValue = selectToken(getState());
      if (!tokenValue) {
        return rejectWithValue();
      }
      token.set(tokenValue);
      const { data } = await privateAPI.get('/users/current');
      return data;
    } catch (err) {
      token.unset();
      return rejectWithValue();
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await privateAPI.post('/users/logout');
      token.unset();
      return data;
    } catch (err) {
      return rejectWithValue();
    }
  }
);
