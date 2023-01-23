'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {number} item 
 * @description this function checks if the argument
 * is an integer.
 * @returns {boolean}
 */
const IsInteger = item => new validator(item).isInteger.answer;
export default IsInteger;