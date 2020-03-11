module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "env": {
        "node": true
    },
    "rules": {
        "space-infix-ops": "error",
        "require-await": "error",
        "quotes": [ "error", "single",
            { "avoidEscape": true, "allowTemplateLiterals": true }
        ],
        "max-len": [
            "error",
            {
                "code": 100,
                "tabWidth": 2,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreComments": true
            }
        ],
        "node/no-unsupported-features/es-syntax": 0,
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-curly-newline": [
            "error",
            {
                "minProperties": 2
            }
        ],
        "node/no-missing-import": [
            "error",
            {
                "allowModules": [],
                "resolvePaths": [
                    "./src",
                    "."
                ],
                "tryExtensions": [
                    ".js",
                    ".json",
                    ".node",
                    ".ts"
                ]
            }
        ],
        "object-property-newline": "error",
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "no-spaced-func": "error",
        //    "prefer-template": "always",
        "array-bracket-newline": [
            "error",
            {
                "multiline": true,
                "minItems": 3
            }
        ],
        "array-element-newline": [
            "error",
            {
                "minItems": 3
            }
        ],
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "no-console": "off",
        "guard-for-in": "off",
        "indent": [
            2,
            "tab"
        ],
        "no-useless-concat": "error",
        "newline-per-chained-call": [
            "error",
            {
                "ignoreChainWithDepth": 1
            }
        ],
        "function-paren-newline": [
            "error",
            {
                "minItems": 5
            }
        ],
        "no-underscore-dangle": [
            "error",
            {
                "allow": [
                    "_client"
                ]
            }
        ],
        "no-multi-spaces": "error",
        "no-tabs": 0,
        "no-restricted-syntax": [
            "error",
            {
                "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                "message": "Unexpected property on console object was called"
            }
        ],
        "semi": [
            "error",
            "never"
        ],
        "complexity": [ "error", { "max": 7 } ],
        "max-lines-per-function": [ "error", { "max": 45 } ],
        "max-depth": [ "error", 4 ],
        "no-multiple-empty-lines": [
            2,
            {
                "max": 1,
                "maxEOF": 1
            }
        ],
        "lines-between-class-members": [
            "error",
            "always"
        ],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            },
            {
                "blankLine": "always",
                "prev": [
                    "function",
                    "block-like"
                ],
                "next": [
                    "function",
                    "block-like"
                ]
            }
        ],
        "block-spacing": "error",
        "keyword-spacing": "error",
        "space-before-function-paren": "error",
        "no-await-in-loop": 0,
        "space-in-parens": [
            "error",
            "never"
        ],
        "no-constant-condition": 0,
        "no-continue": 0,
        "no-dupe-keys": 2,
        // "padded-blocks": [ "error", "never" ] // testar outro dia com o codigo ja feito
        "padded-blocks": [ "error", "always", { "allowSingleLineBlocks": true } ]
    },
    "extends": [
        "eslint:recommended",
        "plugin:node/recommended",
        "airbnb-base"
    ]
}
