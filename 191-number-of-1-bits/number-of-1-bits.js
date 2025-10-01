/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    var result = 0;
    while(n != 0)
    {
        if((n & 1) == 1)
            result++;
        n = n >> 1;
    }
    return result;
};