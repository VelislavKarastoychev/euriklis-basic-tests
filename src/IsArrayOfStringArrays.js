'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array.<Array.<string>>} array 
 * @description this function tests if the
 * argument is array of string arrays.
 * @returns {boolean}
 */
const IsArrayOfStringArrays = array => new validator(array).isArrayOfStringArrays.answer;
export default IsArrayOfStringArrays;