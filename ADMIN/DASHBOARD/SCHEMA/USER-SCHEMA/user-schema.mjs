import mongoose from "mongoose";
import crypto from "crypto";

/// user schema

const UserSchema = new mongoose.Schema({
  firstname: {
    type: mongoose.Schema.Types.String,
  },
  lastname: {
    type: mongoose.Schema.Types.String,
  },
  middlename: {
    type: mongoose.Schema.Types.String,
    default: "None",
  },
  email: {
    type: mongoose.Schema.Types.String,
  },
  dateOfBirth: {
    type: mongoose.Schema.Types.String,
  },
  lga: {
    type: mongoose.Schema.Types.String,
  },
  bloodGroup: {
    type: mongoose.Schema.Types.String,
  },
  genotype: {
    type: mongoose.Schema.Types.String,
  },
  tribe: {
    type: mongoose.Schema.Types.String,
  },
  height: {
    type: mongoose.Schema.Types.String,
  },
  occupation: {
    type: mongoose.Schema.Types.String,
  },
  phoneNumber: {
    type: mongoose.Schema.Types.String,
  },
  maritalStatus: {
    type: mongoose.Schema.Types.String,
  },
  userId: {
    type: mongoose.Schema.Types.String,
  },
  time: {
    type: mongoose.Schema.Types.Date,
    default: Date.now,
  },
});

export const Users = mongoose.model("Users", UserSchema);
