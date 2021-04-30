const getTracks = (html) => {
  const unparsedWithTrailingCommas = html
    .match(/tracks = \[[.\s\S]*?\]/)[0]
    .replace("tracks = ", "");
  const unparsed = unparsedWithTrailingCommas.replace(
    /\,(?!\s*?[\{\[\"\'\w])/g,
    ""
  );
  const tracks = JSON.parse(unparsed);

  return tracks;
};

module.exports = getTracks;