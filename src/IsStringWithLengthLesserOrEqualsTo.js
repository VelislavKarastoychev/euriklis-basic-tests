'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {string} str 
 * @param {number} length 
 * @description this function checks if the first
 * argument is string with length equals to the length
 * (the second argument).
 * @returns {boolean}
 */
const IsStringWithLengthLesserOrEqualsTo = (str, length) => {
    return new validator(str).isString.And.has_length_equals_or_lesser_than(length).answer;
}
export default IsStringWithLengthLesserOrEqualsTo;