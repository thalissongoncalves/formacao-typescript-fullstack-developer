import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.jest.json" }]
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};

export default config;
