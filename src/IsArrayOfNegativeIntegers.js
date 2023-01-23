'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array.<number>} item 
 * @description this function checks if the argument
 * is an array of negative integers.
 * @returns {boolean}
 */
const IsArrayOfNegativeIntegers = item => new validator(item).isArrayOfNegativeIntegers.answer;
export default IsArrayOfNegativeIntegers;