const mongoose = require("mongoose");

const medicineMixtureSchema = mongoose.Schema({
  TYPE_NAME: { type: String },

  INGR_KOR_NAME: { type: String },
  INGR_ENG_NAME: { type: String },
  ITEM_SEQ: { type: Number },
  ITEM_NAME: { type: String },
  ENTP_NAME: { type: String },
  CHART: { type: String },
  CLASS_NAME: { type: String },
  MAIN_INGR: { type: String },

  MIXTURE_INGR_KOR_NAME: { type: String },
  MIXTURE_INGR_ENG_NAME: { type: String },
  MIXTURE_ITEM_SEQ: { type: Number },
  MIXTURE_ITEM_NAME: { type: String },
  MIXTURE_ENTP_NAME: { type: String },
  MIXTURE_CHART: { type: String },
  MIXTURE_CLASS_NAME: { type: String },
  MIXTURE_MAIN_INGR: { type: String },

  PROHBT_CONTENT: { type: String },
});

const medicineMixture = mongoose.model(
  "medicineMixture",
  medicineMixtureSchema
);

module.exports = { medicineMixture };
