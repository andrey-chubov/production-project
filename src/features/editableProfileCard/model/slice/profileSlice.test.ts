import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { profileAction, profileReducer } from './profileSlice';
import { ValidateProfileError } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileShema } from '../types/editableProfileCardSchema';

const data = {
  firstName: 'Андрей',
  lastName: 'Чубов',
  age: 1,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
  avatar:
    'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

describe('profileSlice.test', () => {
  test('set readonly ', () => {
    const state: DeepPartial<ProfileShema> = {
      readonly: false,
    };
    expect(
      profileReducer(state as ProfileShema, profileAction.setReadonly(true)),
    ).toEqual({ readonly: true });
  });
  test('cancel edit ', () => {
    const state: DeepPartial<ProfileShema> = {
      readonly: false,
      form: { ...data, username: 'user' },
      validateErrors: [],
      data,
    };
    expect(
      profileReducer(state as ProfileShema, profileAction.cancelEdit()),
    ).toEqual({
      readonly: true,
      form: data,
      validateErrors: undefined,
      data,
    });
  });
  test('update profile ', () => {
    const state: DeepPartial<ProfileShema> = {
      form: { ...data, username: 'user' },
    };
    expect(
      profileReducer(
        state as ProfileShema,
        profileAction.updateProfile({ username: '123' }),
      ),
    ).toEqual({
      form: { ...data, username: '123' },
    });
  });
  test('update profile pending ', () => {
    const state: DeepPartial<ProfileShema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(state as ProfileShema, updateProfileData.pending),
    ).toEqual({ isLoading: true, validateErrors: undefined });
  });
  test('update profile fullfiled ', () => {
    const state: DeepPartial<ProfileShema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(
        state as ProfileShema,
        updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      data,
      form: data,
    });
  });
});
