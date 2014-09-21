'use strict';

delete require.cache[require.resolve('../')];
var utf8ize = require('../');
var fs = require('fs');
var assert = require('assert');

describe('utf8ize', function() {
    it('transform sourcemap if not utf8ized', function() {
        var expected = fs.readFileSync('test/expected/example.js', 'utf8');
        var actual = utf8ize(fs.readFileSync('test/fixtures/example.js', 'utf8'));
        assert.equal(actual, expected);
    });
    it('leave sourcemap if already utf8ized', function() {
        var expected = fs.readFileSync('test/expected/example.js', 'utf8');
        var actual = utf8ize(expected);
        assert.equal(actual, expected);
    });
});
