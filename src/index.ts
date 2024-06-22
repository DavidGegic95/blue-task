import express from "express";
import { refreshCache } from "./cache/refreshCache";
import fileRoutes from "./routes/fileRoutes";
import "./cache/schedule";
import "./config/env";

const app = express();
const port = process.env.PORT || 3000;
app.use("/api", fileRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Initial API call to fetch and cache data on startup
refreshCache().catch((error) => {
  console.error("Error during initial cache refresh:", error);
});
