// jest.config.js
module.exports = {
    // Transforms tell jest how to process our non-javascript files.
    // Here we're using babel for .js and .jsx files, and ts-jest for
    // .ts and .tsx files.  You *can* just use babel-jest for both, if
    // you already have babel set up to compile typescript files.
    transform: {
        // "^.+\\.jsx?$": "babel-jest",
        // "^.+\\.tsx?$": "ts-jest",
        // If you're using babel for both:
        "^.+\\.[jt]sx?$": "babel-jest",
    },
    // In webpack projects, we often allow importing things like css files or jpg
    // files, and let a webpack loader plugin take care of loading these resources.
    // In a unit test, though, we're running in node.js which doesn't know how
    // to import these, so this tells jest what to do for these.
    moduleNameMapper: {
        // Resolve .css and similar files to identity-obj-proxy instead.
        ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
        // Resolve .jpg and similar files to __mocks__/file-mock.js
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": 'jest-transform-stub',
    },
    // Tells Jest what folders to ignore for tests
    testPathIgnorePatterns: [`node_modules`, `\\.cache`],
    setupFiles: ['./test-setup.ts'],

};