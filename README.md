# DYM
- Did You Mean?

## Introduction
dym is a small tool that checks for incorrectly entered commands and suggest the closest command from the list. Ever typed command like `git status` as `git stats` or anything else (i.e with a typo?). git will immediately whine about that typo and will suggest you proper closest command to the input that it supports.
```shell
$ git stats
git: 'stats' is not a git command. See 'git --help'.

The most similar command is
        status
```

## Usage
file exports a cjs method called `dym` right now. ignore the code quality, it's under progress. Just import it like
```js
const dym = require('dym');
```
and then pass your 'list of commands' and currently entered command like
```js
const closest = dym(["list", "status", "merge"], "marge");
```

it should return `merge`