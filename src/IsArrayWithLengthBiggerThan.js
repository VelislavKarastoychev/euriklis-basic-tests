'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array} array 
 * @param {number} length 
 * @returns {boolean}
 */
const IsArrayWithLengthBiggerThan = (array, length) => new validator(array)
    .isArray
    .And
    .has_length_bigger_than(length).answer;
export default IsArrayWithLengthBiggerThan;