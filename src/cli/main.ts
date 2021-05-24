import { MainCommandOptions } from 'types/cli';
import {
  getBody, getTracks, validateTracks, downloadTrack, logger,
} from '../lib';

const defaults = {
  DIR: '.',
  URL: 'https://tokybook.com/tales-from-earthsea/',
};

const main = async (
  dir = defaults.DIR,
  url = defaults.URL,
  { debug: isDebugEnabled }: MainCommandOptions,
) => {
  logger.level = isDebugEnabled ? 'debug' : 'info';
  logger.debug({ dir, url });

  const body = await getBody(url);
  const unvalidatedTracks = getTracks(body);
  const tracks = validateTracks(unvalidatedTracks);

  logger.info(`Started :: Downloading ${tracks.length} tracks.`);

  await Promise.all(tracks.map((track: unknown) => downloadTrack(track, dir)));

  logger.info(`Completed :: Downloaded ${tracks.length} tracks.`);
};

export default main;
