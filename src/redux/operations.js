import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { privateAPI } from './http';

// axios.defaults.baseURL = 'https://648c688e8620b8bae7ecdb66.mockapi.io';
// const axiosContacts = axios.create({
//   baseURL: 'https://648c688e8620b8bae7ecdb66.mockapi.io',
// });

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await privateAPI.get('/contacts');
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await privateAPI.post('/contacts', contact);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await privateAPI.delete(`/contacts/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
