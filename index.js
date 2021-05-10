const cli = require('./cli');

(async () => {
  try {
    await cli.parseAsync();
  } catch (error) {
    console.error(error);
  }
})();
