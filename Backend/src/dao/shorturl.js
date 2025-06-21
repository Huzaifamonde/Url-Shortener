import urlSchema from "../models/shorturl.model.js";

export const saveUrl = (shortUrl, longUrl, userId) => {
  const newUrl = new urlSchema({
    full_url: longUrl,
    short_url: shortUrl,
  });
  if (userId) {
    newUrl.user_id = userId;
  }
  newUrl.save();
};

export const getMatchedUrl = async (id) => {
  return await urlSchema.findOneAndUpdate(
    { short_url: id },
    { $inc: { clicks: 1 } }
  );
};
