import cache from "../cache/cache";
import { refreshCache } from "../cache/refreshCache";

export const getFileData = async () => {
  const cachedData = cache.get("fileData");
  if (cachedData) {
    return cachedData;
  }

  return await refreshCache();
};
