module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/essential'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2020,
        'sourceType': 'module'
    },
    'plugins': [
        'vue'
    ],
    'rules': {
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'indent': ['error', 2],
        'no-multi-spaces': ['error'],
        'no-trailing-spaces': ['error', { 'skipBlankLines': false, 'ignoreComments': false }],
        'eol-last': ['error', 'always']
    }
};