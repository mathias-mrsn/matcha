module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testEnvironment: 'node',
    testRegex: '/src/.*\\.(test|spec)?\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'js', 'json'],
    roots: ['<rootDir>/src'],
    moduleNameMapper: {
        '@routes': '<rootDir>/src/api/routes/index.ts',
        '@controllers': '<rootDir>/src/api/controllers/index.ts',
        '@services': '<rootDir>/src/api/services/index.ts',
    }
}