'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {string} str 
 * @param {number} length 
 * @description this function tests if the
 * first argument is string with length bigger
 * or equal to the second argument.
 * @returns {boolean}
 */
const IsStringWithLengthBiggerOrEqualTo = (str, length) => {
    return new validator(str).isString.And.has_length_equals_or_bigger_than(length).answer;
}
export default IsStringWithLengthBiggerOrEqualTo;