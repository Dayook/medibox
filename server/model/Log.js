const mongoose = require("mongoose");

const logSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  ITEM_SEQ: {
    type: Number,
    ref: "Medicine",
  },

  ITEM_NAME: {
    type: String,
    ref: "Medicine",
  },

  IMG_SRC: {
    type: String,
  },
  QUANTITY: {
    type: Number,
  },
  START_DATE: {
    type: Date,
  },

  END_DATE: {
    type: Date,
  },

  CAUTION: {
    type: String,
  },
});

const Log = mongoose.model("log", logSchema);
module.exports = { Log };
