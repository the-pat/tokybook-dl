import { MainCommandOptions } from "types/cli";

import {
  getBody,
  getTracks,
  validateTracks,
  logger,
  downloadTracks,
} from "../lib";

const main = async (
  dir: string,
  url: string,
  { debug: isDebugEnabled, limit: concurrency }: MainCommandOptions
) => {
  logger.level = isDebugEnabled ? "debug" : "info";
  logger.debug({ dir, url, concurrency }, "Options:");

  const body = await getBody(url);
  const unvalidatedTracks = getTracks(body);
  logger.debug(unvalidatedTracks, "Unvalidated Tracks:");
  const tracks = validateTracks(unvalidatedTracks);

  logger.info(`Started :: Downloading ${tracks.length} tracks.`);

  await downloadTracks(tracks, { dir, concurrency });

  logger.info(`Completed :: Downloaded ${tracks.length} tracks.`);
};

export default main;
