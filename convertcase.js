//==============================================================================
// Converts strings to snake_case and camelCase. Converts both strings and
// objects. For objects, a new object is returned with the properties in the
// specified case and any defined values copied from the original object.
//==============================================================================
// Copyright (c) 2016 Frank Hellwig
//==============================================================================

'use strict';

var util = require('util');

exports.toCamelCase = function(val) {
    return convert(toCamelCase, val);
};

exports.toSnakeCase = function(val) {
    return convert(toSnakeCase, val);
};

exports.isUpperCase = function(str) {
    for (let i = 0; i < str.length; i++) {
        if (!isUpperCase(str[i])) return false;
    }
    return true;
};

exports.isLowerCase = function(str) {
    for (let i = 0; i < str.length; i++) {
        if (!isLowerCase(str[i])) return false;
    }
    return true;
};

function convert(fn, val) {
    if (val === null) return null;
    if (util.isString(val)) {
        return fn(val);
    } else if (util.isArray(val)) {
        let retval = [];
        val.forEach(item => {
            retval.push(convert(fn, item));
        });
        return retval;
    } else if (util.isObject(val)) {
        var obj = {};
        Object.keys(val).forEach(key => {
            if (typeof val[key] !== 'undefined') {
                obj[fn(key)] = val[key];
            }
        });
        return obj;
    } else {
        throw new Error(`Invalid type (${typeof val}) for ${val}`);
    }
}

function toCamelCase(str) {
    let buf = [];
    let state = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        switch (state) {
            case 0: // ignore leading underscores
                buf.push(c);
                if (c !== '_') {
                    state = 1;
                }
                break;
            case 1: // process characters until an underscore is found
                if (c === '_') {
                    state = 2;
                } else {
                    buf.push(c);
                }
                break;
            case 2: // upper case the character after an underscore
                if (c !== '_') {
                    buf.push(c.toUpperCase());
                    state = 1;
                }
                break;
        }
    }
    return buf.join('');
}

function toSnakeCase(str) {
    let buf = [];
    let flag = false;
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (isUpperCase(c)) {
            if (flag) {
                buf.push('_');
                flag = false;
            }
            buf.push(c.toLowerCase());
        } else {
            flag = isLowerCase(c) || isDigit(c);
            buf.push(c);
        }
    }
    return buf.join('');
}

const UPPER_CASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER_CASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const DIGITS = '0123456789';

function isUpperCase(c) {
    return UPPER_CASE_LETTERS.indexOf(c) !== -1;
}

function isLowerCase(c) {
    return LOWER_CASE_LETTERS.indexOf(c) !== -1;
}

function isDigit(c) {
    return DIGITS.indexOf(c) !== -1;
}
