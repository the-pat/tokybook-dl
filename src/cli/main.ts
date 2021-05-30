import { MainCommandOptions } from 'types/cli';
import {
  getBody, getTracks, validateTracks, logger, downloadWithConcurrencyLimit,
} from '../lib';

const defaults = {
  DIR: '.',
  URL: 'https://tokybook.com/tales-from-earthsea/',
};

const main = async (
  dir = defaults.DIR,
  url = defaults.URL,
  { debug: isDebugEnabled, limit }: MainCommandOptions,
) => {
  logger.level = isDebugEnabled ? 'debug' : 'info';
  logger.debug({ dir, url });

  const body = await getBody(url);
  const unvalidatedTracks = getTracks(body);
  const tracks = validateTracks(unvalidatedTracks);

  logger.info(`Started :: Downloading ${tracks.length} tracks.`);

  await downloadWithConcurrencyLimit(tracks, { dir, limit });

  logger.info(`Completed :: Downloaded ${tracks.length} tracks.`);
};

export default main;
