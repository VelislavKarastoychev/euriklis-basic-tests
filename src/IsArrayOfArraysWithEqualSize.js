'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array.<Array>} array 
 * @description this function tests if the argument
 * is array of arrays with equal size.
 * @returns {boolean}
 */
const IsArrayOfArraysWithEqualSize = array => new validator(array).isArrayOfArraysWithEqualSize.answer;
export default IsArrayOfArraysWithEqualSize;