import { Command } from 'commander';

import main from './main';
import processInput from './processInput';

const cli = new Command();

cli
  .arguments('[dir] [url]')
  .option('-d, --debug', 'Enable debug logging.')
  .option('-l, --limit <number>', 'Limit the maximum number of tracks that can be downloaded at once.', processInput.integer)
  .action(main);

export default cli;
