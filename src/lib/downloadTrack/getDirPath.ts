import path from 'path';
import { TrackWithUrl } from 'types/lib';

const getDirPath = (track: TrackWithUrl, dir: string) => {
  const [, , filename] = track.chapter_link_dropbox.split('/');
  const fileparts = filename.split(' - ');
  const book = fileparts[0];
  return path.join(dir, book);
};

export default getDirPath;
