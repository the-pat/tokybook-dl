import { TrackRaw, TrackWithUrl } from "types/lib";

const validateTracks = (tracks: TrackRaw[]): TrackWithUrl[] =>
  tracks.filter((track): track is TrackWithUrl => Boolean(track.url));

export default validateTracks;
