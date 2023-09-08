import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userAction } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
  'users/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', {
        username, password,
      });
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userAction.setAuthData(response.data));
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('error');
    }
  },
);
