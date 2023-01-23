'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array.<number>} item 
 * @description this function checks if the
 * argument is an array of integers.
 * @returns {boolean}
 */
const IsIntegerArray = item => new validator(item).isIntegerArray.answer;
export default IsIntegerArray;