module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "never"],
        "quotes": ["error", "single"],
        "comma-dangle": ["error", "never"],
        "no-console": "off",
        "no-unused-vars": "off"
    }
};