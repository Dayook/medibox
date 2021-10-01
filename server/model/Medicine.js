const mongoose = require("mongoose");

const medicineSchema = mongoose.Schema({
  ITEM_SEQ: { type: Number },
  ITEM_NAME: { type: String },
  ENTP_NAME: { type: String },
  ITEM_PERMIT_DATE: { type: Date },
  ETC_OTC_CODE: { type: String },
  CLASS_NO: { type: String },
  CHART: { type: String },
  BAR_CODE: { Type: Number },
  MATERIAL_NAME: { type: String },
  EE_DOC_ID: { type: String },
  UD_DOC_ID: { type: String },
  NB_DOC_ID: { type: String },
  INSERT_FILE: { type: String },
  STORAGE_METHOD: { type: String },
  VALID_TERM: { type: String },
  REEXAM_TARGET: { type: String },
  REEXAM_DATE: { type: Date },
  PACK_UNIT: { type: String },
  EDI_CODE: { type: Number },
  CANCEL_DATE: { type: Date },
  CANCEL_NAME: { type: String },
  CHANGE_DATE: { type: Date },
});

const Medicine = mongoose.model("Medicine", medicineSchema);

module.exports = { Medicine };
