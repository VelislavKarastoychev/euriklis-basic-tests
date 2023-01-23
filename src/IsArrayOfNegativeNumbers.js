'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array.<number>} array
 * @description this function checks if the argument
 * is an array of negative numbers.
 * @returns {boolean}
 */
const IsArrayOfNegativeNumbers = (array) => {
    return new validator(array).isArrayOfNegativeNumbers.answer;
}
export default IsArrayOfNegativeNumbers;