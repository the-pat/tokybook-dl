import { Command } from 'commander';

import main from './main';

const cli = new Command();

cli
  .arguments('[dir] [url]')
  .option('-d, --debug', 'Enable debug logging.')
  .option('-l, --limit <number>', 'Limit the maximum number of tracks that can be downloaded at once.')
  .action(main);

export default cli;
