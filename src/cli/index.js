const { Command } = require('commander');

const main = require('./main');

const cli = new Command();

cli
  .arguments('[dir] [url]')
  .option('-d, --debug', 'Enable debug logging.')
  .action(main);

module.exports = cli;
