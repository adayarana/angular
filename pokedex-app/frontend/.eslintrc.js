module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    'no-underscore-dangle': 0,
    'comma-dangle': [2, 'never'],
    'no-useless-constructor': 0
    }
};
