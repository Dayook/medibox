const express = require("express");
const router = express.Router();
const { medicine } = require("../model/Medicine");

router.get("/getMedicine", (req, res) => {
  medicine.find().exec((err, medicines) => {
    console.log(medicines);
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, medicines });
  });
});

module.exports = router;
