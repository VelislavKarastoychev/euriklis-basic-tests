'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {any} item 
 * @description this function checks if the
 * argument is an empty array or string or object
 * or is undefined.
 * @returns {boolean}
 */
const IsEmpty = item => new validator(item).isEmpty.answer;
export default IsEmpty;