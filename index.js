module.exports = {
  "extends": ["airbnb"],
  "env": {
    "browser": true,
    "jest": true,
    "node": true,
    "es6": true,
  },
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "plugins": [
    "react",
    "jest"
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
    // But, it is fine for our tests.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    "react/jsx-no-bind": 0,

    // Disable: Ensure imports point to a file/module that can be resolved.
    // In tests, we want more flexibility
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    "import/no-unresolved": 0,

    // Disable max line length
    // In tests, we want more flexibility
    // https://eslint.org/docs/rules/max-len
    "max-len": 0,

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
