const { Command } = require('commander');

const main = require('./main');

const cli = new Command();

cli.arguments("[dir] [url]").action(main);

module.exports = cli;
