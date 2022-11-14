// routes/index.js and users.js
import express from "express";
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    error: "Cannot GET, please return to https://www.guptadhairya.com",
  });
});

export default router;
