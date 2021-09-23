const mongoose = require("mongoose");

const logSchema = mongoose.Schema({
  user :{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  
})