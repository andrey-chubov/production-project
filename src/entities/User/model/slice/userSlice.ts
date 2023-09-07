import { createSlice } from '@reduxjs/toolkit';
import { UserShema } from '../types/user';

const initialState: UserShema = {

};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
});

export const { actions: userAction } = userSlice;

export const { reducer: userReducer } = userSlice;
