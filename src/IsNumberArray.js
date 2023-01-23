'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array.<number>} item 
 * @description this function checks if the argument is
 * an array of arbitrary numbers.
 * @returns {boolean}
 */
const IsNumberArray = item => new validator(item).isNumberArray.answer;
export default IsNumberArray;