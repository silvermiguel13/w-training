const ErrorMessages = require('../../config/error');
const { constants } = require('../../config/constants');

exports.userSchema = {
  name: {
    in: ['body'],
    isEmpty: {
      negated: true,
      errorMessage: ErrorMessages.NAME_REQUIRED
    }
  },
  lastName: {
    in: ['body'],
    isEmpty: {
      negated: true,
      errorMessage: ErrorMessages.LASTNAME_REQUIRED
    }
  },
  email: {
    in: ['body'],
    isEmpty: {
      negated: true,
      errorMessage: ErrorMessages.EMAIL_REQUIRED
    },
    custom: {
      options: email => constants.EMAIL_MACH.test(email),
      errorMessage: ErrorMessages.USER_EMAIL_NOT_COMPANY
    }
  },
  password: {
    isEmpty: {
      negated: true,
      errorMessage: ErrorMessages.PASSWORD_REQUIRED
    },
    isLength: {
      errorMessage: ErrorMessages.PASSWORD_NOT_LENGTH,
      options: { min: 8 }
    },
    isAlphanumeric: true,
    errorMessage: ErrorMessages.PASSWORD_NOT_COMPLY
  }
};
