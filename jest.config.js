module.exports = {
  testRegex: '/src/.*?(test)\\.js$',
  modulePathIgnorePatterns: ['node_modules', 'dist'],
  setupFiles: ['<rootDir>/src/__tests__/index.js'],
};
