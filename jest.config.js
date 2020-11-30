module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^/(.*)$": "<rootDir>/src/$1",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/lib/fileMock.js", //https://stackoverflow.com/questions/46898638/importing-images-breaks-jest-test
  },
};
