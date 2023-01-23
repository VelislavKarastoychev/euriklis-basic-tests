'use strict';
import validator from '@euriklis/validator';
/**
 * 
 * @param {string} str 
 * @param {number} lower 
 * @param {number} upper 
 * @description this function checks if the 
 * first argument is string which lies in a
 * closed interval [lower, upper] which is formed
 * from the other two arguments.
 * @returns {boolean}
 */
const IsStringWithLengthInClosedRange = (str, lower, upper) => {
    return new validator(str).isString
        .And
        .has_length_in_closed_range(lower, upper).answer;
}
export default IsStringWithLengthInClosedRange;