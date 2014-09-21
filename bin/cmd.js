#!/usr/bin/env node

/**
 * utf8ize-sourcemaps
 * 
 * https://github.com/twada/utf8ize-sourcemaps
 *
 * Copyright (c) 2014 Takuto Wada
 * Licensed under the MIT license.
 *   http://twada.mit-license.org/
 */

var utf8ize = require('../');
var concat = require('concat-stream');
var fs = require('fs');
var file = process.argv[2];
var input;
if (file && file !== '-') {
  input = fs.createReadStream(file);
} else {
  input = process.stdin;
} 
input.pipe(concat(function(buf) {
    console.log(utf8ize(buf.toString('utf8')));
}));
