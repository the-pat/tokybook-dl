import { logger } from './lib';
import cli from './cli';

(async () => {
  try {
    await cli.parseAsync();
  } catch (error) {
    logger.error(error);
  }
})();
