import { MainCommandOptions } from 'types/cli';
import settings from 'const/settings';

import {
  getBody, getTracks, validateTracks, logger, downloadTracks,
} from '../lib';

const main = async (
  dir = settings.defaults.directory,
  url = settings.defaults.url,
  { debug: isDebugEnabled, limit: concurrency }: MainCommandOptions,
) => {
  logger.level = isDebugEnabled ? 'debug' : 'info';
  logger.debug({ dir, url });

  const body = await getBody(url);
  const unvalidatedTracks = getTracks(body);
  const tracks = validateTracks(unvalidatedTracks);

  logger.info(`Started :: Downloading ${tracks.length} tracks.`);

  await downloadTracks(tracks, { dir, concurrency });

  logger.info(`Completed :: Downloaded ${tracks.length} tracks.`);
};

export default main;
