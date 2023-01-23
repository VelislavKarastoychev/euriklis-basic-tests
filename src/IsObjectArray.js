'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array.<object>} item 
 * @description this function checks if the
 * parameter is an array of object elements.
 * @returns {boolean}
 */
const IsObjectArray = item => new validator(item).isObjectArray.answer;
export default IsObjectArray;