'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array.<number>} array 
 * @description this utility function tests if the 
 * argument is an array with elements that are
 * positive integers. 
 * @returns {boolean}
 */
const IsArrayOfPositiveNumbers = (array) => new validator(array).isArrayOfPositiveNumbers.answer;
export default IsArrayOfPositiveNumbers;