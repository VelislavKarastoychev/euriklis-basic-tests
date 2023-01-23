'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array.<boolean>} item 
 * @description this function tests if the underlined
 * argument is an array of boolean types.
 * @returns {boolean}
 */
const IsBooleanArray = item => new validator(item).isBooleanArray.answer;
export default IsBooleanArray;