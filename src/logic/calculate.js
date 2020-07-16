import operate from './operate';

const calculate = (calcObj, buttonName) => {
    if (buttonName === '+/-') {
        calcObj.total = (Number(calcObj.total) * -1).toString();
    } else {
        calcObj.total = operate(calcObj.total,
            calcObj.next, buttonName).toString();
    }
    return calcObj;
};
export default calculate;