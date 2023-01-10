const ErrorMessages = {
  // Weet Api
  WEET_API_ERROR: 'Weet api request is failed',

  // Data Base
  DATABASE_ERROR: 'Database error',

  // API
  NAME_REQUIRED: 'The name is required',
  LASTNAME_REQUIRED: 'The last name is required',
  EMAIL_REQUIRED: 'The email is requited',
  USER_EMAIL_NOT_COMPANY: 'The email is not pertain to company.',
  USER_EMAIL_EXIST: 'This email already exist.',
  PASSWORD_REQUIRED: 'The password is required.',
  PASSWORD_NOT_LENGTH: 'Password should be at least 8 characters',
  PASSWORD_NOT_COMPLY: 'The password not comply the required.',
  PASSWORD_NOT_ENCRYPT: 'The password encrypt have an error.'
};

module.exports = ErrorMessages;
