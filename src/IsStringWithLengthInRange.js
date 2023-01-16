'use strict';
import validator from '@euriklis/validator';
const IsStringWithLengthInRange = (str, lower, upper) => {
    return new validator(str).isString
        .And
        .has_length_in_range(lower, upper).answer;
}
export default IsStringWithLengthInRange;