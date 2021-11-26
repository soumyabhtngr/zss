module.export = {
    roots: ['<rootDir>/src'],
    transform: {
        '\\.(js|jsx)?$': 'babel-jest',
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    },
    collectCoverage: true,
    testMatch: ['<rootDir>/src/**/>(*.)(test|spec).{js, jsx}'], // finds test
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '@testing-library/react/cleanup-after-each',
        '<rootDir>/src/webApp/src/setupTests.js'
    ], // setupFiles before the tests are ran
    moduleNameMapper: {
        '^.+\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
    }
};
