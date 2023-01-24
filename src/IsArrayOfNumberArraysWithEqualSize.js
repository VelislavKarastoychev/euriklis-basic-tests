'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array.<Array.<number>>} array 
 * @description this function tests if the argument
 * is array of number arrays with equal length.
 * @returns {boolean}
 */
const IsArrayOfNumberArraysWithEqualSize = array => new validator(array).isArrayOfNumberArraysWithEqualSize.answer;
export default IsArrayOfNumberArraysWithEqualSize;