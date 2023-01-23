'use strict';
import validator from '@euriklis/validator';
/**
 * 
 * @param {Array} array 
 * @param {number} lower 
 * @param {number} upper 
 * @description this function checks if the 
 * argument is an array and if its length/size
 * lies in the closed interval [lower, upper],
 * where the lower and upper are the second
 * and the third argument of the function.
 * @returns {boolean}
 */
const IsArrayWithLengthInClosedRange = (array, lower, upper) => {
    return new validator(array).isArray
    .And
    .has_length_in_closed_range(lower, upper).answer;
}
export default IsArrayWithLengthInClosedRange;