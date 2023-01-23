'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {number} item 
 * @description this function checks if the argument
 * is a floating point number in javascript.
 * @returns {boolean}
 */
const IsFloat = item => new validator(item).isFloat.answer;
export default IsFloat;