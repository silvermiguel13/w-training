const { User } = require('../models');
const logger = require('../logger');
const { databaseError } = require('../errors');
const ErrorMessages = require('../../config/error');

exports.create = async user => {
  try {
    return await User.create(user);
  } catch (error) {
    logger.error(error.message);
    return databaseError(ErrorMessages.DATABASE_ERROR);
  }
};

exports.findUserByEmail = async email => {
  try {
    return await User.findOne({ where: { email } });
  } catch (error) {
    logger.error(error.message);
    return databaseError(ErrorMessages.DATABASE_ERROR);
  }
};
