module.exports = {
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true,
    },
  },
  "plugins": [
    "react"
  ],
  "rules": {
    // Enable react plugin rules
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",

    // Disable: Prohibit missing props validation in a React component.
    // This is bad for production code where we should validate prop types.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    "react/prop-types": 0,

    // Disable: Prevent usage of .bind() in JSX props for testing only.
    // This is bad for production code as it is inefficient by causing superflous garbage collection.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    "react/jsx-no-bind": 0,

    // Enforce a maximum line length (max-len)
    // http://eslint.org/docs/rules/max-len
    "max-len": ["error", {
      "code": 100,
      "tabWidth": 2,
      "ignoreComments": true,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true,
    }],

    // Disable: Ensure imports point to a file/module that can be resolved.
    // Not sure why we are doing this.  Commenting out for now.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    "import/no-unresolved": 0,

    // Disable: Anoying rule. Doesn't hurt anything. Enabling it causes us to rename imported components
    // thus losing self-documenting variable names like import Thing from 'thing'
    // https://stackoverflow.com/questions/44437203/how-do-i-resolve-eslint-import-no-named-as-default
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,

    // Disable: Forbid the use of extraneous packages.
    // We need to be able to pull devDependencies like Jest's shallow and mount into our tests.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true,
      "optionalDependencies": true,
      "peerDependencies": true,
    }]
  }
};
