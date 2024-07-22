import mongoose from "mongoose";

const AdminShema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.String,
  },
  password: {
    type: mongoose.Schema.Types.String,
  },
  time: {
    type: mongoose.Schema.Types.Date,
    default: Date.now,
  },
});

export const Admin = mongoose.model("Admin", AdminShema);
