const mongoose = require("mongoose");

const CautionSchema = mongoose.Schema({
  a_name: {
    type: String,
  },
  a_code: {
    type: int,
  },
  b_name: {
    type: String,
  },
  b_code: {
    type: int,
  },
});
