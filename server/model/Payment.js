const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  paid_amount: {
    type: Number,
  },

  merchant_uid: {
    type: String,
  },
  pay_method: {
    type: String,
  },
});

const Payment = mongoose.model("payment", paymentSchema);

module.exports = { Payment };
