import axios from "axios";
import { formatData } from "../utils/formatData";
import cache from "./cache";
import "../config/env";

const API_URL = process.env.API_URL || "";

// const CACHE_DURATION = 24 * 60 * 60; // 24 hours in seconds
const CACHE_DURATION = 30; // 30 seconds for easier testing

export const refreshCache = async () => {
  try {
    const response = await axios.get(API_URL);
    const formatedData = formatData(response.data.items);
    cache.set("fileData", formatedData, CACHE_DURATION);
    return formatedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
};
