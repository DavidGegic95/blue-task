import cron from "node-cron";
import { refreshCache } from "./refreshCache";
const REFRESH_INTERVAL = "0 */23 * * *"; // Every 23 hours
// const REFRESH_INTERVAL = "*/1 * * * *"; // 1 min for easier testing

// Refresh the cache periodically using cron
cron.schedule(REFRESH_INTERVAL, () => {
  refreshCache().catch((error) => {
    console.error("Error during scheduled cache refresh:", error);
  });
});
