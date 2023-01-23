'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array} item 
 * @description this function checks if the argument
 * is an array.
 * @returns {boolean}
 */
const IsArray = item => new validator(item).isArray.answer;
export default IsArray;