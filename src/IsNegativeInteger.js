'use strict';
import validator from '@euriklis/validator';
/**
 * 
 * @param {number} item 
 * @description this function checks if the argument
 * is a negative integer.
 * @returns {boolean}
 */
const IsNegativeInteger = item => new validator(item).isNegativeInteger.answer;
export default IsNegativeInteger;