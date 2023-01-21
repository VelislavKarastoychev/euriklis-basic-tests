'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array.<function>} item 
 * @description this utility function tests
 * if the argument is an array with function
 * type elements.
 * @returns {boolean}
 */
const IsFunctionArray = item => new validator(item)
    .isArrayOfFunctions.answer;
export default IsFunctionArray;