
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
    const one = Big(numberOne);
    const two = Big(numberTwo);
    switch (operation) {
        case '-':
            return one.minus(two).valueOf();
        case '+':
            return one.plus(two).valueOf();
        case '/':
            return one.div(two).valueOf();
        default:
            return one.times(two).valueOf();
    }
};
export default operate;