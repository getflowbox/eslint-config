# `@flowbox/eslint-config`

Our very own ESLint configuration, initially a clone of
[`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) but replaced with rules that better suit our needs.

## Installation

Install dependencies:

```sh
$ yarn add -D \
eslint \
eslint-find-rules \
eslint-plugin-eslint-comments \
eslint-plugin-import \
eslint-plugin-jsx-a11y \
eslint-plugin-react \
@flowbox/eslint-config
```

Extend your `.eslintrc`:

```
{
  "extends": ["@flowbox/eslint-config"],
}
```

And you're done 🤚

## Migrating an existing codebase

If you have an existing codebase which you gradually want to migrate to
this eslint config there's a warnings-only config available. This means
you can set a `--max-warnings x` when running Eslint which you gradually
lower as you go along fixing linting problems, and when you finally
reach zero you remove this flag.

To use this strategy, simply change the `extends` to:

`"extends": ["@flowbox/eslint-config/warn-only"]`
