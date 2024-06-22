import express from "express";
import { getFileData } from "../services/fileService";

const fileRoutes = express.Router();

fileRoutes.get("/files", async (req, res) => {
  try {
    const data = await getFileData();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default fileRoutes;
