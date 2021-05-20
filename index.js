const { logger } = require('./lib');
const cli = require('./cli');

(async () => {
  try {
    await cli.parseAsync();
  } catch (error) {
    logger.error(error);
  }
})();
