'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {number} item 
 * @description this function checks if the argument
 * is an arbitrary number.
 * @returns {boolean}
 */
const IsNumber = item => new validator(item).isNumber.answer;
export default IsNumber;