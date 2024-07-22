import mongoose from "mongoose";

const InstitutionSchema = new mongoose.Schema({
  institutionName: {
    type: mongoose.Schema.Types.String,
  },
  institutionCode: {
    type: mongoose.Schema.Types.String,
  },
  time: {
    type: mongoose.Schema.Types.Date,
    default: Date.now,
  },
  institutionID: {
    type: mongoose.Schema.Types.String,
  },
});

export const Institution = mongoose.model("Institutions", InstitutionSchema);
