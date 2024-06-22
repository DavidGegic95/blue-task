import { formatData } from "../formatData";
import { testUrls, testOutput } from "./testData";

describe("formatData", () => {
  it("should format data correctly", () => {
    expect(formatData(testUrls)).toEqual(testOutput);
  });
});
