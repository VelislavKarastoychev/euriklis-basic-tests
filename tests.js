'use strict';
import * as conditions from './index.js';
const arr = [1, 2, 3]
if (conditions.IsArray([])) console.log('This is array.');
if (conditions.IsArrayOfNegativeIntegers([])) console.log('This is array of negative integers!')
else console.log('This is not array of negative integers!')
if (conditions.IsString('jj')) console.log('This is string.')
if (conditions.IsArrayWithLengthInRange(arr, 2, 5)) console.log('This array has length in the range (2, 5).');
else console.log('No this array has no length ' + arr.length);
const number_arrays = [
    [1, 2, 3,],
    [55, 1],
    [1, 49.493]
];
if (conditions.IsArrayOfNumberArrays(number_arrays)) console.log('This is array of number arrays...');
const string_arrays = [
    ['a', 'b', 'c'],
    ['this is string'],
    ['this', 'is', 'string', '!',]
];
if (conditions.IsArrayOfStringArrays(string_arrays)) console.log('This is array of string arrays...');