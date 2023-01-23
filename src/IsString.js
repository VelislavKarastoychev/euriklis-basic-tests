'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {string} item 
 * @description this function checks if the argument
 * is a string.
 * @returns {boolean}
 */
const IsString = item => new validator(item).isString.answer;
export default IsString;