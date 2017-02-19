hasbin-cli
==========

From the command line, check whether a binary exists in the PATH environment
variable.


Usage
-----

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


Installation
------------

```sh
npm install hasbin-cli
```


Contribute
----------

- Issue Tracker: https://github.com/paulmelnikow/hasbin-cli/issues
- Source Code: https://github.com/paulmelnikow/hasbin-cli

Pull requests welcome!


Support
-------

If you are having issues, please let me know.


License
-------

The project is licensed under the MIT license.
