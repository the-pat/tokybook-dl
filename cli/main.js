const { getBody, getTracks, validateTracks, downloadTrack } = require("../lib");

const defaults = {
  DIR: "/Users/pat/Documents/Audiobooks",
  URL: "https://tokybook.com/tales-from-earthsea/",
};

const main = async (dir = defaults.DIR, url = defaults.URL) => {
  const body = await getBody(url);
  const unvalidatedTracks = getTracks(body);
  const tracks = validateTracks(unvalidatedTracks);
  await Promise.all(tracks.map((track) => downloadTrack(track, dir)));
};

module.exports = main;