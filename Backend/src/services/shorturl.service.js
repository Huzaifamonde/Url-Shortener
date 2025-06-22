import { generateNanoId } from "../utils/helper.js";

import { saveUrl } from "../dao/shorturl.js";
export const createShortUrlServiceWithoutUser = async (url) => {
  const shortUrl = generateNanoId(7);
  if (!shortUrl) throw new Error("Short URL not generated");
  await saveUrl(shortUrl, url); //fun for storing in DB
  // res.send(nanoid(7));
  return shortUrl;
};

export const createShortUrlServiceWithUser = async (url, userId) => {
  const shortUrl = generateNanoId(7);
  await saveUrl(shortUrl, url, userId); //fun for storing in DB
  // res.send(nanoid(7));
  
  return shortUrl;
};
