import { DeepPartial } from '@reduxjs/toolkit';
import { LoginShema } from '../types/LoginShema';
import { loginAction, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('set username ', () => {
    const state: DeepPartial<LoginShema> = {
      username: '123',
    };
    expect(loginReducer(state as LoginShema, loginAction.setUsername('123'))).toEqual({ username: '123' });
  });
  test('set password ', () => {
    const state: DeepPartial<LoginShema> = {
      password: '123',
    };
    expect(loginReducer(state as LoginShema, loginAction.setPassword('123'))).toEqual({ password: '123' });
  });
});
