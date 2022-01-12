const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    times: function(a, b) {
        return a * b;
    },
    devine: function(a, b) {
        return a / b;
    },
    power: function(a, b) {
        return a ** b
    }
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 15);
const timesResult = calculator.times(10, minusResult);
const devineResult = calculator.devine(timesResult, plusResult);
const powerResult = calculator.power(devineResult, minusResult);

