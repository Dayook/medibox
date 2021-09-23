const mongoose = require("mongoose");

const MedicineSchema = mongoose.Schema({
  name: {
    type: String
  },
  code: {
    type: int
  },
  ingredient_name: {
    type: String
  },
  ingredient_code: {
    type: int
  }
})