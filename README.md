utf8ize-sourcemaps
================================

UTF8-ize your sourcemaps

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![License][license-image]][license-url]


DESCRIPTION
---------------------------------------

`utf8ize-sourcemaps` provides a function and a command, both appends `charset=utf-8` to SourceMap comment.


MOTIVATION
---------------------------------------

Sourcemaps have mojibake problems. Unicode characters are broken in sourcemaps with Chrome.

 * [a problem of '--debug' option](https://github.com/substack/node-browserify/issues/753)
 * [Unicode characters are broken in sourcemap.](https://github.com/substack/node-browserify/issues/893)
 * [Chinese characters](https://github.com/thlorenz/inline-source-map/issues/6)

To fix this, we need to add `charset=utf-8` to our sourcemaps.


API
---------------------------------------

### var utf8izedCode = utf8ize(originalCode)

```javascript
var utf8ize = require('utf8ize-sourcemaps');
var originalCode = fs.readFileSync('path/to/code-with-sourcemap-comment.js', 'utf8');
// utf8ize
var utf8izedCode = utf8ize(originalCode);
```

COMMAND LINE USAGE EXAMPLE
---------------------------------------

```
browserify main.js --debug | utf8ize-sourcemaps > bundle.js 
```

INSTALL
---------------------------------------

### via npm

Install locally,

    $ npm install --save-dev utf8ize-sourcemaps

and/or globally.

    $ npm install -g utf8ize-sourcemaps


AUTHOR
---------------------------------------
* [Takuto Wada](http://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](http://twada.mit-license.org/2014-2015) license.


[npm-url]: https://npmjs.org/package/utf8ize-sourcemaps
[npm-image]: https://badge.fury.io/js/utf8ize-sourcemaps.svg

[travis-url]: http://travis-ci.org/twada/utf8ize-sourcemaps
[travis-image]: https://secure.travis-ci.org/twada/utf8ize-sourcemaps.svg?branch=master

[depstat-url]: https://gemnasium.com/twada/utf8ize-sourcemaps
[depstat-image]: https://gemnasium.com/twada/utf8ize-sourcemaps.svg

[license-url]: http://twada.mit-license.org/2014-2015
[license-image]: http://img.shields.io/badge/license-MIT-brightgreen.svg
