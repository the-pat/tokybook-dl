const { promisify } = require("util");
const stream = require("stream");
const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const got = require("got");

const { getBody, getTracks } = require('./lib');

const pipeline = promisify(stream.pipeline);

const getId = (id) => {
  const adjusted = id - 1;
  const prefix = adjusted > 9 ? "" : "0";
  return prefix + adjusted;
};

const getUrl = async (track) => {
  const { body } = await got.post(
    "https://autoplaylist.top/api-us/getMp3Link",
    {
      json: { chapterId: track.chapter_id, serverType: 1 },
      responseType: "json",
    }
  );
  return body.link_mp3;
};

const validateTracks = (tracks) => tracks.filter((track) => track.url);

const downloadTrack = async (track, dir) => {
  let [_book, _, filename] = track.chapter_link_dropbox.split("/");

  const fileparts = filename.split(" - ");
  const filestats = path.parse(filename);
  const book = fileparts[0];

  if (fileparts.length === 2) {
    filename = filename.replace(filestats.name, `${getId(track.track)}`);
  } else if (fileparts.length === 3) {
    filename = filename
      .replace(
        `${fileparts[0]} - ${fileparts[1]} - `,
        `${getId(track.track)} - `
      )
      .replace(`-${track.chapter_id}`, "");
  }

  const dirpath = path.join(dir, book);
  const filepath = path.join(dirpath, filename);
  await fsPromises.mkdir(dirpath, { recursive: true });

  const url = track.url === "NA" ? await getUrl(track) : track.url;
  await pipeline(
    got.stream(url),
    fs.createWriteStream(filepath, { flag: "wx" })
  );
};

const main = async () => {
  const url = "https://tokybook.com/tales-from-earthsea/";
  const dir = "/Users/pat/Documents/Audiobooks";
  const body = await getBody(url);
  const unvalidatedTracks = getTracks(body);
  const tracks = validateTracks(unvalidatedTracks);
  await Promise.all(tracks.map((track) => downloadTrack(track, dir)));
}

module.exports = { main };