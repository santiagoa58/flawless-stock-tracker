module.exports = {
  preset: 'ts-jest',
  setupFiles: ['dotenv/config'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/jest.config.css.js',
  },
};
