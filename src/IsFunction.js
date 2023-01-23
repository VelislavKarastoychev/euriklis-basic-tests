'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {function} item 
 * @description this function checks if the
 * current argument is a legal javascript function
 * type.
 * @returns {boolean}
 */
const IsFunction = item => new validator(item).isFunction.answer;
export default IsFunction;