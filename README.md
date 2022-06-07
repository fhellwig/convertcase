# convertcase

Converts between snake and camel case.

Version 1.0.2

This module provides two conversion functions and two utility functions:

- `toCamelCase({string|array|object})`
- `toSnakeCase({string|array|object})`
- `isUpperCase({string})`
- `isLowerCase({string})`

## Usage

To install:

    $ npm install @fhellwig/convertcase

To test:

    $ npm test

To use:

```javascript
import { toCamelCase, toSnakeCase } from '@fhellwig/convertcase';

console.log(convertcase.toCamelCase('this_is_my_string'));
// outputs thisIsMyString

console.log(convertcase.toSnakeCase('thisIsMyString'));
// outputs 'this_is_my_string'
```

## API

Each function below is described as taking a string. However, the input to the two conversion functions can be an array or an object.

- For an array, each element is recursively converted.
- For an object, each key is converted and a new object is returned.

Invariant: The output of either conversion function, when run through the function again, results in identical output. Formally,

```javascript
fn(s) === fn(fn(s));
```

where `fn` is either `toCamelCase` or `toSnakeCase`.

The functions themselves are lossy. Meaning that converting to snake case and then back to camel case may _not_ result in the same original string.

### `toCamelCase(str)`

Preserves leading underscores. Then converts the string, converting any character following an embedded underscore to upper case. Embedded underscores are not copied to the output.

Examples:

```
this_is_my_string -> thisIsMyString
embedded_underscore -> embeddedUnderscore
_leading_underscore -> _leadingUnderscore
this_was_allupper -> thisWasAllupper
digits123_and_more_digits456 -> digits123AndMoreDigits456
$dollar_signs_are_ok -> $dollarSignsAreOk
```

### `toSnakeCase(str)`

Copies each character from the input to the output. If an upper case character is preceded by a lower case character or digit, output an underscore before the upper case character. Note that this preserves leading and embedded underscores. The output is always lower case.

Examples:

```
thisIsMyString -> this_is_my_string
Embedded_Underscore -> embedded_underscore
_LeadingUnderscore -> _leading_underscore
ThisWasALLUPPER -> this_was_allupper
Digits123AndMoreDigits456 -> digits123_and_more_digits456
$DollarSignsAreOk -> $dollar_signs_are_ok
```

### `isUpperCase(str)`

Returns true if _every_ character in `str` is an upper case letter.

### `isLowerCase(str)`

Returns true if _every_ character in `str` is an lower case letter.

## License

The MIT License (MIT)

Copyright (c) 2022 Frank Hellwig

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
