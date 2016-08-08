var calculator = {
    add: function(first, second) {
        return first + second;
    },
    subtract: function(first, second) {
        return first - second;
    },
    multiply: function(first, second) {
        return first * second;
    },
    divide: function(dividend, divisor) {
        return dividend / divisor;
    },
    modulo: function(dividend, divisor) {
        return dividend % divisor;
    },
    exponent: function(base, power) {
        return Math.pow(base, power);
    },
    root: function(base, root) {
        return Math.pow(base, 1 / root);
    }
};
