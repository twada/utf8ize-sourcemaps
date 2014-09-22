utf8ize-sourcemaps
================================

UTF8-ize your sourcemaps


DESCRIPTION
---------------------------------------

`utf8ize-sourcemaps` provides a function and a command, both appends `charset=utf-8` to SourceMap comment.


MOTIVATION
---------------------------------------

Sourcemaps have mojibake problems. Unicode characters are broken in sourcemaps.

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

Install

    $ npm install --save-dev utf8ize-sourcemaps

and/or

    $ npm install -g utf8ize-sourcemaps


AUTHOR
---------------------------------------
* [Takuto Wada](http://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](http://twada.mit-license.org/) license.
