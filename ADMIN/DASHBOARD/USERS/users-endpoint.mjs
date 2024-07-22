import express from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { userValidator } from "./users-validator.mjs";
import { Users } from "../SCHEMA/USER-SCHEMA/user-schema.mjs";

const userRout = express.Router();

// post users

userRout.post(
  "/api/admin/user/new",
  checkSchema(userValidator),
  async (req, res) => {
    const result = validationResult(req);
    const data = matchedData(req);
    try {
      if (!result.isEmpty()) return res.status(401).json(result.array());
      if (!data.middlename) {
        data.middlename = "NONE";
      }
      const newUser = new Users(data);
      newUser.userId = crypto.randomUUID().replaceAll("-", "").slice(0, 12);
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.log(error);
      return res.status(201).json(error);
    }
  }
);

// get all users

userRout.get("/api/admin/user/all", async (req, res) => {
  try {
    const findAllUsers = await Users.find();
    return res.status(200).json(findAllUsers);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// get user

userRout.get("/api/admin/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const findUser = await Users.findOne({ userId: id });
    if (!findUser) return res.status(404).json("User not found");
    return res.status(200).json(findUser);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

// delete user

userRout.delete("/api/admin/user/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const findUser = await Users.findOne({ userId: id });
    if (!findUser) return res.status(404).json("User Not Found");
    const deletedUser = await Users.deleteOne({ userId: id });
    if (deletedUser) return res.status(200).json(findUser);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
});

// update user

userRout.put(
  "/api/admin/user/update/:id",
  checkSchema(userValidator),
  async (req, res) => {
    const { id } = req.params;

    try {
      const findUser = await Users.findOne({ userId: id });
      if (!findUser) return res.status(404).json("User Not Found");
      const result = validationResult(req);
      const data = matchedData(req);
      if (!result.isEmpty()) return res.status(401).json(result.array());
      if (!data.middlename) {
        data.middlename = "NONE";
      }
      const updatedUser = await Users.findOneAndUpdate(
        { userId: id },
        {
          $set: {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            middlename: data.middlename,
            dateOfBirth: data.dateOfBirth,
            lga: data.lga,
            bloodGroup: data.bloodGroup,
            genotype: data.genotype,
            tribe: data.tribe,
            height: data.height,
            occupation: data.occupation,
            phoneNumber: data.phoneNumber,
            maritalStatus: data.maritalStatus,
          },
        }
      );
      return res.status(201).json(updatedUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
);

export default userRout;

/* "firstname": "Danjuma",
"email": "dan@gmail.com",
"lastname": "Rita",
"middlename": "dave",
"dateOfBirth": "11/05/2004",
"lga": "keffi",
"bloodGroup": "AA",
"genotype": "A",
"tribe": "Mada",
"height": "66",
"occupation": "student",
"phoneNumber": "09068842993",
"maritalStatus": "single" */
