'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array.<string>} item 
 * @description this function is tests if the 
 * argument is array of string elements.
 * @returns {boolean}
 */
const IsStringArray = item => new validator(item).isStringArray.answer;
export default IsStringArray;