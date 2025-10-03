/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
     const INT_MAX =  2147483647;
    const INT_MIN = -2147483648;

    const sign = x < 0 ? -1 : 1;
    const revStr = Math.abs(x).toString().split('').reverse().join('');
    const result = parseInt(revStr, 10) * sign;

    if (result < INT_MIN || result > INT_MAX) return 0;

    return result;
};