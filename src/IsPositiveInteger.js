'use strict';
import validator from '@euriklis/validator';
/**
 * 
 * @param {number} item 
 * @description this function checks if the parameter
 * of the function is positive integer number.
 * @returns {boolean}
 */
const IsPositiveInteger = item => new validator(item).isPositiveInteger.answer;
export default IsPositiveInteger;