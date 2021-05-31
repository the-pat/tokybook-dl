import { promisify } from 'util';
import stream from 'stream';
import path from 'path';
import fsPromises from 'fs/promises';
import got from 'got';
import fs from 'fs';
import { AutoplaylistMp3, TrackWithUrl } from 'types/lib';
import getDirPath from './getDirPath';

const pipeline = promisify(stream.pipeline);

const getId = (id: number) => {
  const adjusted = id - 1;
  const prefix = adjusted > 9 ? '' : '0';
  return prefix + adjusted;
};

const getUrl = async (track: TrackWithUrl) => {
  const { body } = await got.post<AutoplaylistMp3>(
    'https://autoplaylist.top/api-us/getMp3Link',
    {
      json: { chapterId: track.chapter_id, serverType: 1 },
      responseType: 'json',
    },
  );
  return body.link_mp3;
};

const downloadTrack = async (track: TrackWithUrl, dir: string) => {
  let [, , filename] = track.chapter_link_dropbox.split('/');

  const fileparts = filename.split(' - ');
  const filestats = path.parse(filename);

  if (fileparts.length === 2) {
    filename = filename.replace(filestats.name, `${getId(track.track)}`);
  } else if (fileparts.length === 3) {
    filename = filename
      .replace(
        `${fileparts[0]} - ${fileparts[1]} - `,
        `${getId(track.track)} - `,
      )
      .replace(`-${track.chapter_id}`, '');
  }

  const dirpath = getDirPath(track, dir);
  const filepath = path.join(dirpath, filename);
  await fsPromises.mkdir(dirpath, { recursive: true });

  const url = track.url === 'NA' ? await getUrl(track) : track.url;
  await pipeline(
    got.stream(url),
    fs.createWriteStream(filepath, { flags: 'wx' }),
  );
};

export default downloadTrack;
