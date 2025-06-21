import { createShortUrlServiceWithUser } from "../services/shorturl.service.js";
import { getMatchedUrl } from "../dao/shorturl.js";
export const createShortUrl = async (req, res) => {
  //console.log("Full body:", req.body);
  const { url } = req.body; //extract url from post req
  //console.log("Extracted URL:", url);

  const shortUrl = await createShortUrlServiceWithUser(url);
  res.send(process.env.APP_URL + "/" + shortUrl);
};

export const redirectFromShortURL = async (req, res) => {
  //redirection api
  const { id } = req.params;
  //const url = await urlSchema.findOne({ short_url: id });
  const matchedUrl_doc = await getMatchedUrl(id);
  if (matchedUrl_doc) {
    res.redirect(matchedUrl_doc.full_url);
  } else {
    res.status(404).send("Not Found");
  }
};
