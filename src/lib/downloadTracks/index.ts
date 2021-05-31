import pLimit, { Limit } from 'p-limit';
import curry from 'lodash.curry';

import { DownloadConfig, TrackWithUrl } from 'types/lib';
import downloadTrack from './downloadTrack';

const downloadTrackWith = (dir: string, limited: Limit, track: TrackWithUrl) => limited(
  () => downloadTrack(track, dir),
);
const downloadTrackBy = ({ dir, concurrency }: DownloadConfig) => curry(downloadTrackWith)(dir)(
  pLimit(concurrency),
);
const downloadTracks = (
  tracks: TrackWithUrl[],
  config: DownloadConfig,
) => Promise.all(tracks.map(downloadTrackBy(config)));

export default downloadTracks;
