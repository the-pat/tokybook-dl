const { getBody, getTracks, validateTracks, downloadTrack } = require("../lib");

const main = async () => {
  const url = "https://tokybook.com/tales-from-earthsea/";
  const dir = "/Users/pat/Documents/Audiobooks";
  const body = await getBody(url);
  const unvalidatedTracks = getTracks(body);
  const tracks = validateTracks(unvalidatedTracks);
  await Promise.all(tracks.map((track) => downloadTrack(track, dir)));
};

module.exports = { main };
