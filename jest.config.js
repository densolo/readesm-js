const path = require('path');


module.exports = {
  rootDir: __dirname,
  verbose: true,
  //preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [
    'js',
    'ts'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  modulePaths: [
    'src'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  }
};