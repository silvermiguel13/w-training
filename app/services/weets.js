const axios = require('axios');
const { weetsApi } = require('../../config').common.api;
const { weetsApiError } = require('../errors');
const logger = require('../logger');
const ErrorMessages = require('../../config/error');

exports.getWeets = async () => {
  try {
    const { data } = await axios.get(weetsApi);
    return data;
  } catch (error) {
    logger.error(error.message);
    return weetsApiError(ErrorMessages.WEET_API_ERROR);
  }
};
