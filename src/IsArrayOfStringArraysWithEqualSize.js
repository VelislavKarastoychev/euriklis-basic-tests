'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array.<Array.<string>>} array 
 * @description this function tests if the argument
 * is an array of string arrays with equal size. 
 * @returns {boolean}
 */
const IsArrayOfStringArraysWithEqualSize = array => new validator(array).isArrayOfStringArraysWithEqualSize.answer;
export default IsArrayOfStringArraysWithEqualSize;