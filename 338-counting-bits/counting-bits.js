/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let ans = new Array(n + 1).fill(0);
    for(i=0;i<=n;i++)
    {
       ans[i] = ans[i>>1] + (i & 1);
    }
    return ans;
};