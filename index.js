module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "airbnb"
  ],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  plugins: [
    "babel",
    "react",
    "react-hooks",
    "jest-dom"
  ],
  parserOptions: {
    ecmaVersion: "esnext",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "eslint-comments/no-unused-disable": "error",
    "consistent-return": "off",
    "comma-dangle": [
      "error",
      "never"
    ],
    "quote-props": [
      "error",
      "consistent"
    ],
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "indent": "off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "ignoredNodes": [
          "TSTypeParameterInstantiation"
        ]
      }
    ],
    "no-trailing-spaces": "error",
    "semi": "off",
    "@typescript-eslint/semi": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1,
        "maxBOF": 1
      }
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "no-multi-spaces": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "no-extra-parens": "off",
    "react/jsx-fragments": "error",
    "react/jsx-curly-newline": "warn",
    "react/state-in-constructor": "warn",
    "react/static-property-placement": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "ui/**/*",
          "vite.config.js"
        ]
      }
    ],
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "max-len": [
      "error",
      {
        "code": 140
      }
    ],
    "no-bitwise": [
      "error",
      {
        "allow": [
          "~"
        ]
      }
    ],
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    "eslint-comments/disable-enable-pair": [
      "error",
      {
        "allowWholeFile": true
      }
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "jsx-a11y/label-has-associated-control": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "no-nested-ternary": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "react/no-array-index-key": "warn",
    "import/extensions": "off",
    "jsx-a11y/control-has-associated-label": "warn",
    "react/no-unescaped-entities": "off",
    "jsx-props-no-spreading": "off",
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/destructuring-assignment": "off",
    "react/button-has-type": "off",
    "react/function-component-definition": ["error", {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }],
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "@typescript-eslint/consistent-type-definitions": [
      "error",
      "type"
    ],
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        "prefer": "type-imports"
      }
    ],
    "@typescript-eslint/consistent-indexed-object-style": [
      "error",
      "record"
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  },
  settings: {
    "react": {
      "version": "detect"
    }
  }
}