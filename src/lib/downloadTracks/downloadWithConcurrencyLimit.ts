import { DownloadConfig, TrackWithUrl } from 'types/lib';
import downloadTrack from '.';

const downloadWithConcurrencyLimit = (
  tracks: TrackWithUrl[],
  { dir }: DownloadConfig,
) => Promise.all(tracks.map((track) => downloadTrack(track, dir)));

export default downloadWithConcurrencyLimit;
