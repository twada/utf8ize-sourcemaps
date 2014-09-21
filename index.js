/**
 * utf8ize-sourcemaps
 * 
 * https://github.com/twada/utf8ize-sourcemaps
 *
 * Copyright (c) 2014 Takuto Wada
 * Licensed under the MIT license.
 *   http://twada.mit-license.org/
 */
'use strict';

// borrowed from convert-source-map
var commentRx = /(?:\/\/|\/\*)[@#][ \t]+sourceMappingURL=data:(?:application|text)\/json;base64,((?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?)(?:[ \t]*\*\/)?$/mg;

function replacer(re, contentType, offset, s) {
    return 'sourceMappingURL=data:' + contentType + ';charset=utf-8;base64,';
}

module.exports = function utf8ize (code) {
    var matched = code.match(commentRx);
    commentRx.lastIndex = 0;
    return matched ? code.replace(/sourceMappingURL=data:((?:application|text)\/json);base64,/, replacer) : code;
};
