import { Command } from 'commander';

import settings from 'const/settings';

import main from './main';
import processInput from './processInput';

const cli = new Command();

cli
  .arguments('[dir] [url]')
  .option('-d, --debug', 'Enable debug logging.')
  .option(
    '-l, --limit <number>',
    'Limit the maximum number of tracks that can be downloaded at once.',
    processInput.integer,
    settings.defaults.concurrency,
  )
  .action(main);

export default cli;
