# hasbin-cli

[![version](https://img.shields.io/npm/v/hasbin-cli.svg?style=flat-square)][npm]
[![license](https://img.shields.io/npm/l/hasbin-cli.svg?style=flat-square)][npm]
[![build](https://img.shields.io/circleci/project/github/paulmelnikow/hasbin-cli.svg?style=flat-square)][build]
[![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)][prettier]

[npm]: https://npmjs.com/hasbin-cli
[build]: https://circleci.com/gh/paulmelnikow/hasbin-cli/tree/master
[prettier]: https://prettier.io/

From the command line, check whether a binary exists in the PATH environment
variable.

## Usage

Make sure that one or more programs is installed.

```sh
hasbin foreman heroku || echo 'Foreman and heroku are required!' && exit 1
hasbin --all foreman heroku || echo 'Foreman and heroku are required!' && exit 1
```

Make sure that at least one program is installed.

```sh
hasbin --some brew apt-get || echo 'Please install a package manager.' && exit 1
```

Return the name of the first program that is installed.

```sh
echo 'Your package manager is:' && hasbin --first brew apt-get
```

## Installation

```sh
npm install hasbin-cli
```

## Contribute

- Issue Tracker: https://github.com/paulmelnikow/hasbin-cli/issues
- Source Code: https://github.com/paulmelnikow/hasbin-cli

Pull requests welcome!

## Support

If you are having issues, please let me know.

## License

The project is licensed under the MIT license.
