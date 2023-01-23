'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Object} item 
 * @description this function checks if the parameter
 * is an object javascript type.
 * @returns {boolean}
 */
const IsObject = item => new validator(item).isObject.answer;
export default IsObject;