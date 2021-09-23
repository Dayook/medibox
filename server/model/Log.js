const mongoose = require("mongoose");

const logSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  medicine_code: {
    type: int,
    ref: "Medicine",
  },

  start_date: {
    type: Date,
  },

  end_date: {
    type: Date,
  },
});
