import { DownloadConfig, TrackWithUrl } from 'types/lib';
import downloadTrack from './downloadTrack';

const downloadWithConcurrencyLimit = (
  tracks: TrackWithUrl[],
  { dir }: DownloadConfig,
) => Promise.all(tracks.map((track) => downloadTrack(track, dir)));

export default downloadWithConcurrencyLimit;
