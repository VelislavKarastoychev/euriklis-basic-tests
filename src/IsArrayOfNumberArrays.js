'use strict';
import validator from '@euriklis/validator';
/**
 * 
 * @param {Array.<number>} array 
 * @description this function tests if the argument
 * is an array of number arrays.
 * @returns {boolean}
 */
const IsArrayOfNumberArrays = (array) => new validator(array).isArrayOfNumberArrays.answer;
export default IsArrayOfNumberArrays;