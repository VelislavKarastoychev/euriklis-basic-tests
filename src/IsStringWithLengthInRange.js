'use strict';
import validator from '@euriklis/validator';
/**
 * 
 * @param {string} str 
 * @param {number} lower 
 * @param {number} upper 
 * @description this function checks if the 
 * first argument is in the range formed from
 * the other two arguments.
 * @returns {boolean}
 */
const IsStringWithLengthInRange = (str, lower, upper) => {
    return new validator(str).isString
        .And
        .has_length_in_range(lower, upper).answer;
}
export default IsStringWithLengthInRange;