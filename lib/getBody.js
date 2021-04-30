const got = require("got");

const getBody = async (url) => {
  const response = await got(url);
  const { body } = response;
  return body;
}

module.exports = getBody;