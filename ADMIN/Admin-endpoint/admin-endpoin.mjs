import express from "express";
import { Admin } from "../ADMIN-SCHEMA/admin-schema.mjs";
const adminRout = express.Router();

// post request

adminRout.post("/api/admin/new", async (req, res) => {
  const { username, password } = req.body;
  try {
    const newAdmin = new Admin({
      username: username,
      password: password,
    });
    const savedAdmin = await newAdmin.save();
    res.status(201).json(savedAdmin);
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
});

// admin login

adminRout.post("/api/admin/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    // searching user from data base
    const findUser = await Admin.find({
      username: username,
      password: password,
    });
    // handle response
    if (findUser.length < 1) return res.status(400).json("Invalid Credentials");
    return res.status(200).json(findUser);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

export default adminRout;
