import { Command } from 'commander';

import main from './main';

const cli = new Command();

cli
  .arguments('[dir] [url]')
  .option('-d, --debug', 'Enable debug logging.')
  .action(main);

export default cli;
