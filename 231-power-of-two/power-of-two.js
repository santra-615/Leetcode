/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    let i = 0;
    let temp = n;
    while (temp > 1) {    
        temp = temp >> 1;
        i = i + 1;
    }
    if (n == Math.pow(2, i))
        return true;
    else return false
};