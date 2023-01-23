'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array} array 
 * @param {number} length 
 * @description this function checks if the argument
 * is an array which length is equals or bigger than
 * the length parameter (the second argument of the function).
 * @returns {boolean}
 */
const IsArrayWithLengthBiggerOrEqualTo = (array, length) => {
    return new validator(array).isArray.And.has_length_equals_or_bigger_than(length).answer;
}
export default IsArrayWithLengthBiggerOrEqualTo;