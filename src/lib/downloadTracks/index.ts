import pLimit from "p-limit";

import { DownloadConfig, TrackWithUrl } from "types/lib";
import downloadTrack from "./downloadTrack";
import logger from "../logger";

let downloadedIndex = 1;
const completionMessage = (index: number, trackCount: number) =>
  `Downloaded :: Track ${index}/${trackCount}`;

const downloadTrackWith =
  ({ dir, concurrency }: DownloadConfig, trackCount: number) =>
  (track: TrackWithUrl) =>
    pLimit(concurrency)(() =>
      downloadTrack(track, dir)
        .then(() => completionMessage(downloadedIndex, trackCount))
        .then((message) => logger.info(message))
        .then(() => {
          downloadedIndex += 1;
        })
    );
const downloadTracks = (tracks: TrackWithUrl[], config: DownloadConfig) =>
  Promise.all(tracks.map(downloadTrackWith(config, tracks.length)));

export default downloadTracks;
