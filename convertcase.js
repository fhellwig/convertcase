//==============================================================================
// Converts strings to snake_case and camelCase. Converts both strings and
// objects. For objects, a new object is returned with the properties in the
// specified case and any defined values copied from the original object.
//==============================================================================
// Copyright (c) 2022 Frank Hellwig
//==============================================================================

export function toCamelCase(val) {
  return convert(_toCamelCase, val);
}

export function toSnakeCase(val) {
  return convert(_toSnakeCase, val);
}

export function isUpperCase(str) {
  for (let i = 0; i < str.length; i++) {
    if (!_isUpperCase(str[i])) return false;
  }
  return true;
}

export function isLowerCase(str) {
  for (let i = 0; i < str.length; i++) {
    if (!_isLowerCase(str[i])) return false;
  }
  return true;
}

function convert(fn, val) {
  if (val === null) return null;
  if (typeof val === 'string') {
    return fn(val);
  } else if (Array.isArray(val)) {
    let retval = [];
    val.forEach((item) => {
      retval.push(convert(fn, item));
    });
    return retval;
  } else if (val !== null && typeof val === 'object') {
    const obj = {};
    Object.keys(val).forEach((key) => {
      if (typeof val[key] !== 'undefined') {
        obj[fn(key)] = val[key];
      }
    });
    return obj;
  } else {
    throw new Error(`Invalid type (${typeof val}) for ${val}`);
  }
}

function _toCamelCase(str) {
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

function _toSnakeCase(str) {
  let buf = [];
  let flag = false;
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (_isUpperCase(c)) {
      if (flag) {
        buf.push('_');
        flag = false;
      }
      buf.push(c.toLowerCase());
    } else {
      flag = _isLowerCase(c) || _isDigit(c);
      buf.push(c);
    }
  }
  return buf.join('');
}

const UPPER_CASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER_CASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const DIGITS = '0123456789';

function _isUpperCase(c) {
  return UPPER_CASE_LETTERS.indexOf(c) !== -1;
}

function _isLowerCase(c) {
  return LOWER_CASE_LETTERS.indexOf(c) !== -1;
}

function _isDigit(c) {
  return DIGITS.indexOf(c) !== -1;
}
