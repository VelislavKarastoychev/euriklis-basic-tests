# euriklis/basic-tests

This package tests if some javaScript variable satisfies some conditions or restrictions like is this variable array of numbers, (positive/negative) integers (numbers), strings etc. The package is created for the needs of @euriklis/sortlib, @euriklis/mathematics and @euriklis/ai.

# Installation

```sh
npm install --save @euriklis/basic-tests@latest
```
# Usage

To use the tests run in the file:

```js
import * as conditions from '@euriklis/basic-tests';

const arr = Array.from({length: 20}).map(Math.random);

if (conditions.IsArray(arr)) {
    if (conditions.IsIntegerArray(arr)) {
        console.log('The array consists only from integers');
    } else if (conditions.IsNumberArray(arr)) {
        console.log('The array consists only from numbers.');
    } else if (conditions.IsStringArray(arr)) {
        console.log('The array consists only from strings.');
    }
} else console.log('The underlined variable is not array!');

```


# Documentation

A list of all testing methods of the package with short explanation how to use them may be found [here](./DOCUMENTATION.md). 


# Bugs

This package is created only for personal usage of the author in its packages. However if you find some error you may write in the issues section for the given problem.
