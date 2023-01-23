'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {any} item 
 * @description this function checks if the argument
 * of is undefined javascript type.
 * @returns {boolean}
 */
const IsUndefined = item => new validator(item).isUndefined.answer;
export default IsUndefined;