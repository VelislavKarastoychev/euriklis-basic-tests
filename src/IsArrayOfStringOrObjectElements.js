'use strict';
import validator from "@euriklis/validator";
/**
 * 
 * @param {Array.<string | object>} array 
 * @description this function tests if the argument
 * is an array, every element of which is string or
 * object javascript type.
 * @returns {boolean}
 */
const IsArrayOfStringOrObjectElements = (array) => {
    let answer = true;
    if (new validator(array).isArray.answer) {
        const n = array.length;
        let i, j;
        if (n === 0) answer = false;
        else {
            for (i = 0; i < n >> 2; i++) {
                j = i << 2;
                if (typeof array[j] !== 'string' && Object.prototype.toString.call(array[j]) !== '[object Object]') {
                    answer = false;
                    break;
                }
                ++j;
                if (typeof array[j] !== 'string' && Object.prototype.toString.call(array[j]) !== '[object Object]') {
                    answer = false;
                    break;
                }
                ++j;
                if (typeof array[j] !== 'string' && Object.prototype.toString.call(array[j]) !== '[object Object]') {
                    answer = false;
                    break;
                }
                ++j;
                if (typeof array[j] !== 'string' && Object.prototype.toString.call(array[j]) !== '[object Object]') {
                    answer = false;
                    break;
                }
            }
            if (answer && n % 4 >= 3) {
                j = n - 3;
                if (typeof array[j] !== 'string' && Object.prototype.toString.call(array[j]) !== '[object Object]') {
                    answer = false;
                }
            }
            if (answer && n % 4 >= 2) {
                j = n - 2;
                if (typeof array[j] !== 'string' && Object.prototype.toString.call(array[j]) !== '[object Object]') {
                    answer = false;
                }
            }
            if (answer && n % 4 >= 1) {
                j = n - 1;
                if (typeof array[j] !== 'string' && Object.prototype.toString.call(array[j]) !== '[object Object]') {
                    answer = false;
                }
            }
        }
    } else answer = false;
    return answer;
}
export default IsArrayOfStringOrObjectElements;