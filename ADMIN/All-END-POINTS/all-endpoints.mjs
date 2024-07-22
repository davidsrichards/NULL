import express from "express";
import adminRout from "../Admin-endpoint/admin-endpoin.mjs";
const allPoint = express;
allPoint.use(adminRout);

export default allPoint;
