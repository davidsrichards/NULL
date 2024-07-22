import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import adminRout from "./ADMIN/Admin-endpoint/admin-endpoin.mjs";
import userRout from "./ADMIN/DASHBOARD/USERS/users-endpoint.mjs";
import institutionRout from "./ADMIN/DASHBOARD/Institution/institution-endpoint.mjs";
import { fileURLToPath } from "url";
import path from "path";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
// conneting to data base
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Listening on PORT ${PORT}`);
      console.log("Connected to data base");
    });
  })
  .catch((err) => console.log(err));

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(adminRout);
app.use(userRout);
app.use(institutionRout);
app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

app.get("/api/admin", (req, res) => {
  res.send("Hello from admin");
});
