import got from "got";

const getBody = async (url: string): Promise<string> => {
  const response = await got(url);
  const { body } = response;
  return body;
};

export default getBody;
