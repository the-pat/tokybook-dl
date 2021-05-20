const {
  getBody, getTracks, validateTracks, downloadTrack, logger,
} = require('../lib');

const defaults = {
  DIR: '.',
  URL: 'https://tokybook.com/tales-from-earthsea/',
};

const main = async (dir = defaults.DIR, url = defaults.URL, { debug: isDebugEnabled }) => {
  logger.level = isDebugEnabled ? 'debug' : 'info';
  logger.debug({ dir, url });

  const body = await getBody(url);
  const unvalidatedTracks = getTracks(body);
  const tracks = validateTracks(unvalidatedTracks);

  logger.info(`Started :: Downloading ${tracks.length} tracks.`);

  await Promise.all(tracks.map((track) => downloadTrack(track, dir)));

  logger.info(`Completed :: Downloaded ${tracks.length} tracks.`);
};

module.exports = main;
