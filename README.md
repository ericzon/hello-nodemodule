hello-nodemodule
================

First approach to create a node module.

## Installation

  npm install hello-nodemodule --save

## Usage

  var hello = require('hello-nodemodule');

  console.log(hello.displayMessage());
  console.log(hello.getString());
  console.log(hello.getInteger());
  
## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
* 0.1.1 Minor fix.
* 0.1.2 Added two more methods for testing purpose.
* 0.1.3 Fixed tests.
* 0.1.4 Fixed Makefile & improved README.
