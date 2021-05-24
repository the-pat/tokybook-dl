import got from 'got';

const getBody = async (url) => {
  const response = await got(url);
  const { body } = response;
  return body;
};

export default getBody;
