module.exports = {
  "globals": {
    __PATH_PREFIX__: true,
  },
  "env": {
    "browser": true,
    "es2021": true,
//    "node": true // defines things like process.env when generating through node
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  // "parser": "babel-eslint", // uses babel-eslint transforms
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module",
    "requireConfigFile" : "false"
  },
  "babelOptions": {
    "configFile": "./.babelrc", 
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-anonymous-exports-page-templates": "warn",
    "limited-exports-page-templates": "warn",
  },
  "settings": {
    "react": {
      "version": "detect" // detect react version
    },
  },
};
