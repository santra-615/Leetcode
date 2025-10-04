/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let result = "";

     if (n === 0) return 1;
    while(n!=0)
    {
        let lastbit = n&1;
        let val = lastbit == 1? 0 : 1;;
        result = val + result;
        n = n>>1;
    }
    return parseInt(result, 2);
};