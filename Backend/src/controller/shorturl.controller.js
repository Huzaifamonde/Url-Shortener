import { createShortUrlServiceWithUser } from "../services/shorturl.service.js";
import { getMatchedUrl } from "../dao/shorturl.js";
import wrapAsync from "../utils/tryCatchWrapper.js";
export const createShortUrl = wrapAsync(async (req, res) => {
  //console.log("Full body:", req.body);
  const { url } = req.body; //extract url from post req
  //console.log("Extracted URL:", url);

  const shortUrl = await createShortUrlServiceWithUser(url);
  res.send(process.env.APP_URL + shortUrl);
});

export const redirectFromShortURL = wrapAsync(async (req, res) => {
  //redirection api
  const { id } = req.params;
  //const url = await urlSchema.findOne({ short_url: id });
  const matchedUrl_doc = await getMatchedUrl(id);
  if (!matchedUrl_doc) throw new Error("Short URL not Found");
  res.redirect(matchedUrl_doc.full_url);
});
