const express = require("express");
const router = express.Router();
const { Medicine } = require("../model/Medicine");
const { medicineMixture } = require("../model/MedicineMixture");
const { Log } = require("../model/Log");

router.get("/getMedicine", (req, res) => {
  Medicine.find().exec((err, medicines) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, medicines });
  });
});

router.post("/deleteLog", (req, res) => {
  Log.deleteOne({ _id: req.body.id }).exec((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    } else {
      res.status(200).json({ success: true });
    }
  });
});

router.post("/checkCaution", (req, res) => {
  console.log(req.body.ITEM_NAME);
  medicineMixture
    .find({ ITEM_NAME: req.body.ITEM_NAME })
    // .findOne({ ITEM_SEQ: req.body.ITEM_SEQ })
    .exec((err, added) => {
      if (err) return res.status(400).end(err);
      return res.status(200).json({ success: true, added });
    });
});

router.post("/myLog", (req, res) => {
  console.log("user:", req.body.user);
  Log.find({ user: req.body.user })
    .populate("medicineId")
    .exec((err, myLog) => {
      if (err) return res.status(400).send(err);
      return res.status(200).json({ success: true, myLog: myLog });
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
