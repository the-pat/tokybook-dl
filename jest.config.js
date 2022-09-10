const tsconfigPath = "./test/tsconfig.json";
const { compilerOptions } = require(tsconfigPath);

const { pathsToModuleNameMapper } = require("ts-jest/utils");

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsconfig: tsconfigPath,
    },
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
};
