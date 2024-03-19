/** @type {import('jest').Config} */
const config = {
  roots: ['<rootDir>/src/'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

module.exports = config
