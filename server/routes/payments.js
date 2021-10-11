const express = require("express");
const router = express.Router();
const { Payment } = require("../model/Payment");
const { User } = require("../model/User");
router.post("/pay", (req, res) => {
  const payment = new Payment(req.body);
  console.log(payment);
  payment.save((err, payInfo) => {
    if (err) {
      console.log(err);
      return res.json({ success: false, err });
    } else {
      User.findOneAndUpdate({ _id: req.body.user }, { subscription: 1 }).exec(
        (err, updated) => {
          if (err) return res.status(400).send(err);
          return res.status(200).json({ success: true });
        }
      );
      // return res.status(200).json({ success: true });
    }
  });
});

module.exports = router;
