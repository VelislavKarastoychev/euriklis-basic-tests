'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array.<number> | Array.<string>} item 
 * @description this function tests if the argument
 * is an array of strings or an array of number elements.
 * @returns {boolean}
 */
const IsStringOrNumberArray = item => new validator(item).isStringArray.Or.isNumberArray.answer;
export default IsStringOrNumberArray;