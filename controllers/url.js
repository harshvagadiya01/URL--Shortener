const shortid  = require('shortid');
const URL = require('../models/url.js');

async function handleGenerateNewShortURL(req, res){
  const body = req.body;
  if(!body.url) return res.status(400).json({err : "Url is required"});

  const shortId = shortid.generate();

  await URL.create({
    shortId : shortId,
    redirectURL : body.url,
    visitedHistory : [],
    createdBy : req.user._id
  });

  return res.render("Home", {
    id: shortId,
  });
}

async function handleGetAnalytics(req, res){
  const shortId = req.params.shortId;
  const result = await URL.findOne({shortId});

  if (!result) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  return res.json({
    totalClicks : result.visitedHistory.length,
    analytics : result.visitedHistory
  });
}

async function handleGetURL(req, res){
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitedHistory: {
          timeStamp : Date.now()
        }
      },
    }
  );
  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }
  res.redirect(entry.redirectURL);
}

module.exports = { 
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleGetURL
}; 