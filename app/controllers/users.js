const logger = require('../logger');
const { create } = require('../services/users');
const { encryptPassword } = require('../helpers/user');

exports.createUser = async (req, res, next) => {
  try {
    const { name, lastName, email, password } = req.body;
    logger.info(`Init create user by email: ${email}`);
    const encryptPasswordData = await encryptPassword(password);
    const user = await create({ name, lastName, email, password: encryptPasswordData });
    logger.info(`The ${user.email} is created successfully`);
    return res.status(201).json(user.name);
  } catch (error) {
    logger.error(error);
    return next(error);
  }
};
