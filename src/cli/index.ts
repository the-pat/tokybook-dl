import { Command } from 'commander';

import main from './main';
import processInput from './processInput';

const cli = new Command();

cli
  .arguments('[dir] [url]')
  .description('Download an audio book into the supplied directory, using the book located at the supplied url.', {
    dir: 'Parent directory to save audio books to. Audio book chapters will be downloaded into a directory named by the title of the book.',
    url: 'The target https://tokybook.com/:book-name URL.',
  })
  .option('-d, --debug', 'Enable debug logging.')
  .option(
    '-l, --limit <number>',
    'Limit the maximum number of tracks that can be downloaded at once.',
    processInput.integer,
    3,
  )
  .action((dir, url, opts) => {
    const sanitizedDir = dir ?? '.';
    const sanitizedUrl = processInput.url(url) ?? 'https://tokybook.com/tales-from-earthsea/';

    return main(sanitizedDir, sanitizedUrl, opts);
  });

export default cli;
