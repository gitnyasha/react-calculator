const calculate = ({ total, next, operation }, buttonName) => {
    const calculateObject = {
        total,
        next,
        operation,
    };
    switch (buttonName) {
        case 'AC':
            calculateObject.total = '';
            calculateObject.next = '';
            calculateObject.operation = '';
            break;
        case '+/-':
            calculateObject.total *= -1;
            calculateObject.next *= -1;
            break;
        case '+':
        case '-':
        case 'x':
        case '÷':
        case '%':
            calculateObject.operation = buttonName;
            break;
        case '=':
            return total;

        default:
            return calculateObject;
    }
    return calculateObject;
};

export default calculate;