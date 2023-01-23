'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {boolean} item 
 * @description this function checks if the argument
 * is a boolean javascript type.
 * @returns {boolean}
 */
const IsBoolean = item => new validator(item).isBoolean.answer;
export default IsBoolean;