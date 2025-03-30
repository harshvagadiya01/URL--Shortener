const express = require("express");
const { handleGenerateNewShortURL,
        handleGetAnalytics,
        handleGetURL
      } = require("../controllers/url.js");
const router = express.Router();
const URL = require("../models/url.js");

router.post("/", handleGenerateNewShortURL);

router.get("/:shortId", handleGetURL);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;