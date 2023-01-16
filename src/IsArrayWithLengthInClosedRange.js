'use strict';
import validator from '@euriklis/validator';
const IsArrayWithLengthInClosedRange = (array, lower, upper) => {
    return new validator(array).isArray
    .And
    .has_length_in_closed_range(lower, upper).answer;
}
export default IsArrayWithLengthInClosedRange;