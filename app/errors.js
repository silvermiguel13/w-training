const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.DATABASE_ERROR = 'database_error';
exports.databaseError = message => internalError(message, exports.DATABASE_ERROR);

exports.WEETS_API_ERROR = 'weets_api_error';
exports.weetsApiError = message => internalError(message, exports.WEETS_API_ERROR);

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);

exports.SCHEMA_ERROR = 'schema_error';
exports.schemaError = message => internalError(message, exports.SCHEMA_ERROR);

exports.ENCRYPT_PASSWORD_ERROR = 'encrypt_password_error';
exports.encryptPasswordError = message => internalError(message, exports.ENCRYPT_PASSWORD_ERROR);

exports.DATA_EXIST_ERROR = 'data_exist_error';
exports.dataExistError = message => internalError(message, exports.DATA_EXIST_ERROR);
