import operate from './operate';

const calculate = (calcObj, buttonName) => {
    if (buttonName === '+/-') {
        calcObj.total *= -1;
        calcObj.next *= -1;
    } else {
        calcObj.total = operate(calcObj.total, calcObj.next, buttonName);
    }
    return calcObj;
};
export default calculate;