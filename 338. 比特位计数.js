// 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。

// Example
// 输入: 2
// 输出: [0, 1, 1]

// 输入: 5
// 输出: [0, 1, 1, 2, 1, 2]

// 我的题解
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var nums = [];
    for (i = 0; i <= num; i++) {
        const b = i.toString(2);
        const b1 = b.replace(/0/g, '');
        nums.push(b1.length)
    }
    return nums;
};

// 较优解法
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits1 = function(num) {
    let arr = [0];
    for (let i = 1; i <= num; i++) {
        arr.push(arr[i >> 1] + i % 2)
    }
    return arr;
};

// 最优解法
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits2 = function(num) {
    const calculateBits = (x) => {
        let bits = 0
        while (x > 0) {
            bits++
            x = x & (x - 1)
        }
        return bits
    }
    const ret = new Array(num + 1)
    for (let i = 0, len = ret.length; i < len; i++) {
        ret[i] = calculateBits(i)
    }
    return ret
}