export const formatData = (data: any[]): Record<string, any[]> => {
  const result: Record<string, any[]> = {};

  data.forEach((url: { fileUrl: string }) => {
    const urlParts = new URL(url.fileUrl);
    const ip = urlParts.hostname;
    let pathParts = urlParts.pathname.split("/");

    // Check if pathParts contains file names, which are the last items in the array.
    // If the last pathPart is empty string(no files), just continue(there is no else implementation).
    if (pathParts[pathParts.length - 1]) {
      // filter empty strings
      pathParts = pathParts.filter((part) => part);

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
    }
  });

  return result;
};
