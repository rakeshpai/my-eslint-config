# My eslint config

My personal eslint config, when working with TypeScript files.

## Installation

```
npm i -D eslint eslint-config-rakeshpai
```

and then, create a root `.eslintrc` file:
```json
{
  "extends": "rakeshpai",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## For VSCode config:

Create a `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.format.enable": true,
  "editor.tabSize": 2,
  "typescript.preferences.importModuleSpecifier": "relative",
  "javascript.preferences.importModuleSpecifier": "relative",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "eslint.alwaysShowStatus": true,
  "eslint.codeActionsOnSave.mode": "all",
  "eslint.lintTask.enable": true,
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  }
}
```
And a `.vscode/extensions.json`:
```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint"
  ]
}
```