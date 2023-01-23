'use strict';
import validator from '@euriklis/validator';
/**
 * 
 * @param {Array.<number>} item 
 * @description this utility function tests
 * if the argument is an array with elements
 * that are positive INTEGERS.
 * @returns {boolean}
 */
const IsArrayOfPositiveIntegers = item => new validator(item).isArrayOfPositiveIntegers.answer;
export default IsArrayOfPositiveIntegers;