const { Command } = require('commander');

const main = require('./main');

const cli = new Command();

cli.action(main);

module.exports = cli;
