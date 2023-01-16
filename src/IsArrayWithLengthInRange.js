'use strict';
import validator from '@euriklis/validator';
/**
 * 
 * @param {Array} array 
 * @param {number} lower 
 * @param {number} upper 
 * @returns {boolean}
 */
const IsArrayWithLengthInRange = (array, lower, upper) => {
    return new validator(array)
        .isArray
        .And
        .has_length_in_range(lower, upper).answer;
}
export default IsArrayWithLengthInRange;
