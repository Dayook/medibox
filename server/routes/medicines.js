const express = require("express");
const router = express.Router();
const { medicine } = require("../model/Medicine");
const { Log } = require("../model/Log");

router.get("/getMedicine", (req, res) => {
  medicine.find().exec((err, medicines) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, medicines });
  });
});

router.post("/log", (req, res) => {
  const log = new Log(req.body);
  log.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    } else {
      return res.json({ success: true });
    }
  });
});

module.exports = router;
