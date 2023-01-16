'use strict';
import validator from '@euriklis/validator';
const IsStringWithLengthInClosedRange = (str, lower, upper) => {
    return new validator(str).isString
        .And
        .has_length_in_closed_range(lower, upper).answer;
}
export default IsStringWithLengthInClosedRange;