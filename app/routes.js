// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const userController = require('./controllers/users');
const { userSchema } = require('./schemas/users');
const { validateBySchema } = require('./middlewares/validateBySchema');
const { existEmailDB } = require('./middlewares/users');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/users', [validateBySchema(userSchema), existEmailDB], userController.createUser);
};
