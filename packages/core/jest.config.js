module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['./jest.setup.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/build/', '/dist/'],
    // jest.config.js
  transform: {},
};