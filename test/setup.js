const models = require('../app/models');
const logger = require('../app/logger');

const tables = Object.values(models.sequelize.models);

const truncateTable = model =>
  model.destroy({ truncate: true, cascade: true, force: true, restartIdentity: true }).then(
    () => {
      logger.info('The truncate in the model db is successful');
    },
    err => {
      logger.error('Error truncate: ', err);
    }
  );

const truncateDatabase = () => Promise.all(tables.map(table => truncateTable(table)));

global.beforeEach(async () => {
  await truncateDatabase();
});
