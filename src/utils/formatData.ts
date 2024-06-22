export const formatData = (data: any[]): Record<string, any[]> => {
  const result: Record<string, any[]> = {};

  data.forEach((url: { fileUrl: string }) => {
    const urlParts = new URL(url.fileUrl);
    const ip = urlParts.hostname;
    const pathParts = urlParts.pathname.split("/").filter((part) => part);

    if (!result[ip]) {
      result[ip] = [];
    }

    let currentLevel = result[ip];
    for (let i = 0; i < pathParts.length - 1; i++) {
      const part = pathParts[i];
      let nextLevel = currentLevel.find(
        (item) => typeof item === "object" && item[part]
      );

      if (!nextLevel) {
        nextLevel = { [part]: [] };
        currentLevel.push(nextLevel);
      }

      currentLevel = nextLevel[part];
    }

    currentLevel.push(pathParts[pathParts.length - 1]);
  });

  return result;
};
