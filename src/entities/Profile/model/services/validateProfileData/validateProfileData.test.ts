import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

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

describe('validateProfileData.test', () => {
  test('should be return empty array', () => {
    expect(validateProfileData(data)).toEqual([]);
  });
  test('should be return incorrect user data', () => {
    expect(validateProfileData({ ...data, lastName: undefined })).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
  test('should be return incorrect age', () => {
    expect(validateProfileData({ ...data, age: undefined })).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
  test('should be return incorrect country', () => {
    expect(validateProfileData({ ...data, country: undefined })).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
  test(' should be return no data', () => {
    expect(validateProfileData()).toEqual([ValidateProfileError.NO_DATA]);
  });
});
