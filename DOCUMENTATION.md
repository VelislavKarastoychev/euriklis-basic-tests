# @euriklis/basic-tests documentation:

## Installation:

To install the package run in the terminal:

```sh
npm install @euriklis/basic-tests
```

To use the methods of the package import the library in your js file:

```js
import * as conditions from '@euriklis/basic-tests';
```

or with the *require* method:

```js
const conditions = require("@euriklis/basic-tests");
```

The methods which are implemented in this package for version 1.0.0 are:


- ***IsArray(item)*** - tests if the input argument of the method is an arbitrary array. Returns *true* if the parameter is of array type and *false* otherwise.

Example:

```js
const arr = [1, 2, 3]
if (conditions.IsArray([])) console.log('Correct!!!');
else console.log('Something went wrong!');
```
- ***IsArrayOfArraysWithEqualSize(item)*** - tests if the input argument of the method is array and every element of this array is also array. The length has to be the equals for all array elements. Note that the *nature* of the elements of the array elements is arbitrary and non deterministic from the method.

Example:

```js
const array_of_arrays = [
    [1, 2, 3],
    ['first element', 'second element', 'third element'],
    [() => console.log('Ben Shelton'), (a, b) => a - b, {}],
    [undefined, 'defined', NaN]
];
if (conditions.IsArrayOfArraysWithEqualSize(array_of_arrays)){
    console.log('Successfully tested IsArrayOfArraysWithEqualSize() method!!!');
} else console.log('Something went wrong!');
```

- ***IsArrayOfNegativeIntegers(item)*** - checks if the argument of the method is an array which elements are negative integer numbers.
Example:

```js
const arrayOfNegativeIntegers = [
    -1, -2, -5, -5, -3, -1
];
if (conditions.IsArrayOfNegativeIntegers(arrayOfNegativeIntegers)) {
    console.log('Successfully tested is array of negative integers method!!!');
} else console.log('Something went wrong!');
```

- ***IsArrayOfNegativeNumbers(item)*** - this method checks if the argument is an array which elements are all negative numbers (integers and floats).

Example:

```js
const arrayOfNegativeNumbers = [
    -1, -Math.PI, -2.4, -Math.exp(), -543.42
];
if (conditions.IsArrayOfNegativeNumbers(arrayOfNegativeNumbers)) {
    console.log('Successfully tested is array of negative numbers method!!!');
} else console.log('Something went wrong!');
```
- ***IsArrayOfNumberArrays(item)*** - tests if the underlined argument of the method is a javascript type array with elements which are number arrays with arbitrary length.

Example:

```js
const ANA = [
    [1, 2, -2, 5, Math.PI, Math.exp(), Math.sin(Math.exp()), Math.random()],
    [-1, 3],
    [0.004,]
];
if (conditions.IsArrayOfNumberArrays(ANA)) {
    console.log('Successfully tested is array of number arrays method!!!');
} else console.log('Something went wrong!');
```

- ***IsArrayOfNumberArraysWithEqualSize(item)*** - checks if the underlined argument is a matrix - like structure, i.e. if is an array with element which are numeric arrays with equal size.

Example: 

```js
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15]
];
if (conditions.IsArrayOfNumberArraysWithEqualSize(matrix)) {
    console.log('Successfully tested is array of number arrays with equal size!!!');
} else console.log('Something went wrong!');
```

- ***IsArrayOfPositiveIntegers(item)*** - tests if the argument of the method is an array of positive integers.

Example:

```js
const int_array = [1, 2, 3, 4, 5, 6, 7];
if (conditions.IsArrayOfPositiveIntegers(int_array)) {
    console.log('Successfully tested is array of positive integers');
} else console.log('Something went wrong!');
```

- ***IsArrayOfPositiveNumbers(item)*** - tests if the argument of the method is an array of positive number elements.

Example:

```js
const numeric_array = [1, 2, 4, 6, 69, 41];
if (conditions.IsArrayOfPositiveNumbers(numeric_array)) {
    console.log('Successfully tested is array of positive numbers method.');
} else console.log('Something went wrong!');
```
- ***IsArrayOfStringArrays(item)*** - this method tests if the underlined argument is an array of elements which are arrays with string elements.

Example:

```js
const string_arrays = [
    ['a', 'b', 'c'],
    ['this is string'],
    ['this', 'is', 'string', '!',]
];
if (conditions.IsArrayOfStringArrays(string_arrays)) {
    console.log('Successfully tested is array of string arrays!!!');
} else console.log('Something went wrong!');
```
- ***IsArrayOfStringArraysWithEqualSize(item)*** - this method tests if the argument is array with elements that are arrays with elements of strings with equal length.

```js
const string_matrix = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
];
if (conditions.IsArrayOfStringArraysWithEqualSize(string_matrix)) {
    console.log('Successfully tested array of string arrays with equal size method!!!');
} else console.log('Something went wrong!');
```

- ***IsArrayOfStringOrNumberElements(item)*** tests if the argument of the method is an array of string or number elements.

```js
const array_of_string_or_number_items = [
    'I', 1, 'You', 2, 'He',
]
const other_array_of_string_or_number_elements = [
    'I', 1, 'You', 2, 'He',
    'I', 1, 'You', 2, 'He',
    'I', 1, 'You', 2, 'He',
    'I', 1, 'You', 2, 'He',
    'I', 1, 'You', 2, 'He',
    'I', 1, 'You', 2, 'He',
]
if (conditions.IsArrayOfStringOrNumberElements(array_of_string_or_number_items) && conditions.IsArrayOfStringOrNumberElements(other_array_of_string_or_number_elements)) {
    console.log('Successfully tested array of string or number elements!!!');
} else console.log('Something went wrong!!!');
```
- ***IsArrayOfStringOrObjectElements(item)*** - this method tests if the argument is an array which elements are string or object javascript type.

Example:

```js
const array_of_string_or_object_elements = [
    'I', {name: 'I'}, 'You', {name: 'You'}, 'He', {name: 'He'},
];
const other_array_of_string_or_object_elements = [
    'I', {name: 'I'}, 'You', {name: 'You'}, 'He', {name: 'He'},
    'I', {name: 'I'}, 'You', {name: 'You'}, 'He', {name: 'He'},
    'I', {name: 'I'}, 'You', {name: 'You'}, 'He', {name: 'He'},
    'I', {name: 'I'}, 'You', {name: 'You'}, 'He', {name: 'He'},
    'I', {name: 'I'}, 'You', {name: 'You'}, 'He', {name: 'He'},
    'I', {name: 'I'}, 'You', {name: 'You'}, 'He', {name: 'He'},
]
if (conditions.IsArrayOfStringOrObjectElements(array_of_string_or_object_elements) && conditions.IsArrayOfStringOrObjectElements(other_array_of_string_or_object_elements)) {
    console.log('Successfully tested is array of string or object elements!!!');
} else console.log('Something went wrong!');
```
- ***IsArrayWithLength(item, length)*** - tests if the argument of the method is an array with length equals to some number.

Example:

```js
const arr_with_length_10 = new Array(10);
if (conditions.IsArrayWithLength(arr_with_length_10, 10)) {
    console.log('Successfully tested is array with length method!!!');
} else console.log('Something went wrong!');
```
- ***IsArrayWithLengthBiggerThan(item, length)*** - tests if the underlined argument is an array with length bigger than.

Example: assume the array element above, then an example of how to use the method is the following:

```js
if (conditions.IsArrayWithLengthBiggerThan(arr_with_length_10, 9)) {
    console.log('Successfully tested is array with length bigger than!!!');
} else console.log('Something went wrong!');
```
- ***IsArrayWithLengthBiggerThanOrEqualTo(item, length)*** - tests if the underlined argument is an array with length bigger or equal to some number.

Example: assume the *array arr_with_length_10* element. Then an example how to use the method is the following:

```js
if (conditions.IsArrayWithLengthBiggerThanOrEqualTo(arr_with_length_10, 5)) {
    console.log('Successfully tested is array with length bigger or equal to method!!!');
} else console.log('Something went wrong!');
```

- ***IsArrayWithLengthLessThan(item, length)*** - tests if the underlined argument is array with length less than the number stored in the second parameter of the function.

Example: assume the array above. Then an example how to use the method is described bellow:

```js
if (conditions.IsArrayWithLengthLessThan(arr_with_length_10, 11)) {
    console.log('Successfully tested is array with length less than');
} else console.log('Something went wrong!');
```
- ***IsArrayWithLengthLessThanOrEqualTo(item, length)*** - tests if the underlined argument is array with length lesser or equals to some number (the second parameter of the function).

Example: assume the array element from *IsArrayWithLength(item, length)* method. Then an example how to be used the method is the following:

```js
if (conditions.IsArrayWithLengthLessThanOrEqualTo(arr_with_length_10, 39)) {
    console.log("Successfully tested is array with length less or equal to method!!!");
} else console.log('Something went wrong!');
```
- ***IsArrayWithLengthInClosedRange(item, n, m)*** - tests if the first argument of the function is an array with length which lies in the closed interval [n, m], where n and m are numbers.

Example: assume the array element above. Then an example how the method may be used is: 

```js
if (conditions.IsArrayWithLengthInClosedRange(arr_with_length_10, 10, 20)) {
    console.log('Successfully tested is array with length in the closed range!!!');
} else console.log('Something went wrong!');
```
- ***IsArrayWithLengthInRange(item, n, m)*** -tests if the first argument of the method is an array with length in the open interval (n, m), where n and m are numbers stored in the second and the third parameter of the method.

Example: assume the array above. Then an example how to be used the  method is the following:

```js
if (conditions.IsArrayWithLengthInRange(arr_with_length_10, 9, 19)) {
    console.log('Successfully tested is array with length in range method!!!');
} else console.log('Something went wrong!');
```
- ***IsBoolean(item)*** - tests if the underlined argument of the method is a boolean array.

Example:

```js
const bool = typeof Math.random() === 'number';
if (conditions.IsBoolean(bool)) {
    console.log('Successfully tested is boolean method!!!');
} else console.log('Something went wrong!');
```

- ***IsBooleanArray(item)*** - tests if the underlined argument of the method is a boolean array.

Example:

```js
if (conditions.IsBooleanArray([true, false])) {
    console.log('Successfully tested is boolean array!!!');
} else console.log('Something went wrong!');
```

- ***IsEmpty(item)*** - this method tests if the underlined argument of the method is an array with length equals to zero, or an empty object or finally an empty string. 

Example:

```js
const empty_array = [];
const empty_object = {};
const empty_string = '';
const IsEmpty = conditions.IsEmpty;
if (
    IsEmpty(empty_array)
    && IsEmpty(empty_object)
    && IsEmpty(empty_string)) {
    console.log('Successfully tested is empty method!!!');
} else console.log('Something went wrong!');
```
- ***IsFloat(item)*** - this method tests if the argument is a float number. If the argument is an integer, then *false* value will be returned.

Example: 

```js
if (conditions.IsFloat(123.8)) {
    console.log('Successfully tested is float method!!!')
} else console.log('Something went wrong!');
```
- ***IsFunction(item)*** - tests if the underlined argument of the method is a javascript function type.

Example: 

```js
const f = () => console.log('This is a function');
if (conditions.IsFunction(f)) {
    console.log('Successfully tested is function!!!');
} else console.log('Something went wrong!');
```

- ***IsFunctionArray(item)*** - this method tests if the underlined argument is array with elements that are functions.

Example:

```js
const f_array = [
    () => console.log('Function array'),
    (a, b) => a - b,
    (a, b, c) => a + b - c,
    () => Math.PI,
    function sin (theta) { return Math.sin(theta); } 
];
if (conditions.IsFunctionArray(f_array)) {
    console.log('Successfully tested is function array!!!');
} else console.log('Something went wrong!');
```
- ***IsInteger(item)*** - tests if the argument of the method is an integer number.

Example:

```js
if (conditions.IsInteger(1234)) {
    console.log('Successfully tested is integer method!!!');
} else console.log('Something went wrong!');
```

- ***IsIntegerArray(item)*** - this method tests if the argument is an array of integers (negative or positive).

Example:

```js
const int_array = Array.from({length: 20}).map(el => (20 * Math.random()) >> 0);
if (conditions.IsIntegerArray(int_array)) {
    console.log('Successfully tested is integer array!!!');
} else console.log('Something went wrong!');
```
- ***IsNegativeInteger(item)*** - tests if the underlined argument is a negative integer.

Example:

```js
const negative_int = parseInt('11111111111111111111111111111111', 2) | 0; // -1
if (conditions.IsNegativeInteger(negative_int)) {
    console.log('Successfully tested is negative integer method!!!');
} else console.log('Something went wrong!', negative_int);
```
- ***IsNumber(item)*** - tests if the underlined argument is a number (integer or float, negative or positive).

Example:

```js
if (conditions.IsNumber(4939.3454)) {
    console.log('Successfully tested is number method!!!');
} else console.log('Something went wrong!');
```
- ***IsNumberArray(item)*** - tests if the argument of the method is an array of number elements.

Example:

```js
const numeric_array = Array.from({length: 17}).map(Math.random);
if (conditions.IsNumberArray(numeric_array)) {
    console.log('Successfully tested is number array!!!');
} else console.log('Something went wrong!');
```

- ***IsObject(item)*** - tests if the argument of the method is an arbitrary object.

Example: 

```js
const object = {name: "John", family: "Doe"};
if (conditions.IsObject(object)) {
    console.log('Successfully tested is object!!!');
} else console.log('Something went wrong!');
```
- ***IsObjectArray(item)*** - tests if the argument of the method is an array of object elements.

Example: 

```js
const object_array = [{}, {name: "Harry Potter"}, {name: "John Doe"}];
if (conditions.IsObjectArray(object_array)) {
    console.log('Successfully tested is object array!!!');
} else console.log('Something went wrong!');
```

- ***IsPositiveInteger(item)*** - checks if the argument of the method is a positive integer number.

Example:

```js
const positiveInteger = 124;
if (conditions.IsPositiveInteger(positiveInteger)) {
    console.log("Successfully tested is positive integer method!!!");
} else console.log("Something went wrong!");
```

- ***IsString(item)*** - tests if the underlined argument is a string value.

Example: 

```js
const str = 'This is string';
if (conditions.IsString(str)) {
    console.log('Successfully tested is string method!!!');
} else console.log('Something went wrong!');
```

- ***IsStringOrNumberArray(item)*** - this method tests if the underlined argument is a string or a number array. Note that is the array contains number and string elements the method returns false.

Example:

```js
const string_array = ['I', 'You', 'He', 'She', 'It', 'We', 'You', 'They'];
const number_array = Array.from({length: 10}).map(Math.random);
if (conditions.IsStringOrNumberArray(string_array) && conditions.IsStringOrNumberArray(number_array)) {
    console.log("Successfully tested is string or number array!!!");
} else console.log("Something went wrong!");
```

- ***IsStringWithLength(item, length)*** - tests if the underlined argument of the method is a string javascript type with length equals to the second parameter of the function.

Example: 

```js
const str = 'This is a string';
if (conditions.IsStringWithLength(str, 16)) {
    console.log('Successfully tested is string with length!!!');
} else console.log('Something went wrong!');
```

- ***IsStringWithLengthBiggerThan(item, length)*** - tests if the first argument of the method is a string and if its length is bigger than the second argument which has to be a number.

Example: Assume the argument above. Then an example of how to use this method is the following code:

```js
if (conditions.IsStringWithLengthBiggerThan(str, 10)) {
    console.log('Successfully tested is string with length bigger than!!!');
} else console.log('Something went wrong!');
```

- ***IsStringWithLengthBiggerOrEqualTo(item, length)*** - this method tests if the first element is a string with length bigger or equals to the second argument, which has to be a number.

Example: assume the string element above. An example of how to use this method is the following code:

```js
if (
    conditions.IsStringWithLengthBiggerThanOrEqualTo(str, 15)
    && conditions.IsStringWithLengthBiggerThanOrEqualTo(str, 16)
    ) {
    console.log('Successfully tested is string with length bigger than or equal to method!!!');
} else console.log('Something went wrong!');
```

- ***IsStringWithLengthInClosedRange(str, n, m)*** - this method tests if the first argument is a string with length which lies in the closed interval [n, m] , which is formed from the values of the second and the third parameters of the method.

- ***IsStringWithLengthInRange(str, n, m)*** - this method checks if the first argument of the method is a string with length which lies in the open interval (n, m), which is formed from the values of the second and the third parameters of the method.

Example: assume the string value as above. Then an example how to use the methods *IsStringWithLengthIn(Closed)Range* is presented in the code bellow:

```js
const str = 'This is other string';
if (conditions.IsStringWithLengthInClosedRange(str, 16, 20)) {
    console.log('Successfully tested is string with length in closed range!!!')
} else console.log('Something went wrong!');

if (conditions.IsStringWithLengthInRange(str, 16, 21)) {
    console.log('Successfully tested is string with length in range!!!');
} else console.log('Something went wrong!');
```
- ***IsStringWithLengthLessThan(item, length)*** - tests if the argument of the method is string with length less than the second argument of the method, which has to be a positive number.

- ***IsStringWithLengthLessOrEqualTo(item, length)*** - tests if the argument of the method is string with length less than or equals to the second element of the method, which has to be a positive number.

Example: assume the string above. The code below demonstrates the usage of both the *IsStringWithLengthLessThan* and *IsStringWithLengthLessOrEqualTo* methods.

```js
if (conditions.IsStringWithLengthLessThan(str, 50)) {
    console.log('Successfully tested is string with length less than!!!');
} else console.log('Something went wrong!');

if (conditions.IsStringWithLengthLessThanOrEqualTo(str, 20)) {
    console.log('Successfully tested is string with length less than or equal to method!!!');
} else console.log('Something went wrong!');
```

- ***IsStringArray(item)*** - The method checks if the input, 'item', is an array consisting solely of strings in javascript.

Example: 

```js
const string_array = [
    'Hello world', 'This is a string', 'this is also a string array',
];
if (conditions.IsStringArray(string_array)) {
    console.log('Successfully tested is string array!!!');
} else console.log('Something went wrong!');
```

- ***IsUndefined(item)*** - the method checks if the input "item" parameter is undefined.

Example:

```js
const options = {name: 'John'};
if (conditions.IsUndefined(options.family)) {
    console.log('Successfully tested is undefined method!!!')
} else console.log('Something went wrong!');
```