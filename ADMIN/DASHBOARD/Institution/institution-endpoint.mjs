import express from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { institutionValidator } from "./Institution-validator.mjs";
import { Institution } from "../SCHEMA/INSTITUTION-SCHEMA/institution-schema.mjs";
import crypto from "crypto";
import { compareCode, hashing } from "../HASHING/hashing.mjs";

const institutionRout = express.Router();

// post request

institutionRout.post(
  "/api/admin/institution/new",
  checkSchema(institutionValidator),
  async (req, res) => {
    const result = validationResult(req);
    const data = matchedData(req);
    try {
      if (!result.isEmpty()) return res.status(401).json(result.array());
      const findInstitution = await Institution.findOne({
        institutionCode: data.institutionCode,
      });
      if (findInstitution)
        return res.status(403).send("Institution Already Exist");
      const newInstitution = new Institution(data);
      newInstitution.institutionID = crypto
        .randomUUID()
        .replaceAll("-", "")
        .slice(0, 12);
      const savedinstitution = await newInstitution.save();
      res.status(201).json(savedinstitution);
    } catch (error) {
      console.log(error);
      return res.status(401).json(error);
    }
  }
);

// get all

institutionRout.get("/api/admin/institution/get/all", async (req, res) => {
  try {
    const findAllInstitution = await Institution.find();
    return res.status(200).json(findAllInstitution);
  } catch (error) {
    console.log(error);
    return rs.status(400).json(error);
  }
});

// get request

institutionRout.get("/api/admin/institution/get/code", async (req, res) => {
  const { institutionCode } = req.body;
  try {
    const findInstitution = await Institution.findOne({ institutionCode });
    if (!findInstitution) return res.status(400).json("Institution Not Found");
    return res.status(200).json(findInstitution);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// get by id
institutionRout.get("/api/admin/institution/get/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const findInstitution = await Institution.findOne({ institutionID: id });
    if (!findInstitution) return res.status(400).json("Institution Not Found");
    return res.status(200).json(findInstitution);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// delete

institutionRout.delete(
  "/api/admin/institution/delete/:id",
  async (req, res) => {
    const { id } = req.params;
    try {
      const findInstitution = await Institution.findOne({ institutionID: id });
      if (!findInstitution) return res.status(404).json("Not Found");
      const deletedInstitution = await Institution.deleteOne({
        institutionID: id,
      });
      res.status(200).json(findInstitution);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
);

// patch

institutionRout.patch("/api/admin/institution/patch/:id", async (req, res) => {
  const { id } = req.params;
  const { institutionCode } = req.body;
  try {
    if (!institutionCode)
      return res.status(401).json("CODE must be four Digits");
    const findInstitution = await Institution.findOne({ institutionID: id });
    if (!findInstitution) return res.status(404).json("Not Found");
    const newInstitution = await Institution.findOneAndUpdate(
      { institutionID: id },
      { $set: { institutionCode: institutionCode } }
    );
    res.status(201).json(newInstitution);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

// update

institutionRout.put(
  "/api/admin/institution/update/:id",
  checkSchema(institutionValidator),
  async (req, res) => {
    const { id } = req.params;
    /*     const { institutionCode, institutionName } = req.body; */
    try {
      const result = validationResult(req);
      const data = matchedData(req);
      if (!result.isEmpty()) return res.status(401).json(result.array());
      const findInstitution = await Institution.findOne({ institutionID: id });
      if (!findInstitution) return res.status(404).json("Not Found");
      const findExistedInstitution = await Institution.findOne({
        institutionCode: data.institutionCode,
      });
      if (findExistedInstitution)
        return res.status(401).send("institution Already Existed");
      const newInstitution = await Institution.findOneAndUpdate(
        { institutionID: id },
        {
          $set: {
            institutionName: data.institutionName,
            institutionCode: data.institutionCode,
          },
        }
      );
      res.status(201).json(newInstitution);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
);

export default institutionRout;
