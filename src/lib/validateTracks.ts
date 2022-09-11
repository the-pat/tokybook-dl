import { TrackRaw, TrackWithUrl } from "types/lib";

const validateTracks = (tracks: TrackRaw[]) =>
  tracks.filter((track): track is TrackWithUrl => Boolean(track.url));

export default validateTracks;
