# eslint-config-mrb3k-jest

Frequently used eslint configuration for directories containing Jest + Enzyme tests for React components.  So, I decided to make this into a shareable config.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-config-mrb3k-jest`:

```
$ npm install eslint-config-mrb3k-jest --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-mrb3k-jest` globally.

## Usage

Add `mrb3k-jest` to the extends section of your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

```json
{
    "extends": [
        "mrb3k-jest"
    ]
}
```
I gennerally add the "root" option inside of \__test\__ folders. "root" tells eslint to stop casscading eslintrc files.  It isolates the test folder and only uses our config without inheriting from configurations in ancestor folders.

```json
{
    "root": true,
    "extends": [
        "mrb3k-jest"
    ]
}
```
