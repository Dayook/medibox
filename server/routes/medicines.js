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
    .populate("cautionWith")
    .populate("mixtureId")
    .exec((err, myLog) => {
      if (err) return res.status(400).send(err);
      return res.status(200).json({ success: true, myLog: myLog });
    });
});

router.get("/deleteNoColor", (req, res) => {
  Medicine.deleteMany({ COLOR: "notExtracted" }).exec((err, removed) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, msg: removed });
  });
});

router.post("/logUpdate", (req, res) => {
  Log.findOneAndUpdate(
    { _id: req.body._id },
    {
      $set: {
        START_DATE: req.body.START_DATE,
        END_DATE: req.body.END_DATE,
        QUANTITY: req.body.QUANTITY,
      },
    }
  ).exec((err, updated) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true });
  });
});

router.post("/log", (req, res) => {
  const log = new Log(req.body);

  log.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    } else {
      console.log(log.cautionWith);
      Log.findOneAndUpdate(
        { _id: log.cautionWith },
        { $set: { cautionWith: log._id, mixtureId: log.mixtureId } }
      ).exec((err, updated) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({ success: true });
      });
    }
  });
});

router.post("/getCaution", (req, res) => {
  // const medicine = Medicine.find({ _id: req.body.medicineId }).exec();
});

module.exports = router;
