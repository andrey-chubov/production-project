import { Profile } from '@/entities/Profile';

import { ValidateProfileError } from '../../consts/consts';

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }
  const errors: ValidateProfileError[] = [];
  const {
    firstName, lastName, age, country,
  } = profile;

  if (!firstName || !lastName) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }
  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }
  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
