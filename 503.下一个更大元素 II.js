// 给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循
// 环地搜索它的下一个更大的数。 如果不存在， 则输出 - 1。


// Example
// 输入: [1, 2, 1]
// 输出: [2, -1, 2]
// 解释: 第一个 1 的下一个更大的数是 2；
// 数字 2 找不到下一个更大的数；
// 第二个 1 的下一个最大的数需要循环搜索， 结果也是 2。

// 我的解法

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    var arr = [];
    for (let i = 0; i < nums.length; i++) {
        const max = findMaxNum(i, nums);
        arr[i] = max;
    }
    return arr;
};

// 判断是否是最后一位
// 不是最后一位把后面和前面的合并成一个数组  如果是最后一位直接取前面的
// 返回数组第一个大于当前值的值  如果没有比当前值大 则返回-1
var findMaxNum = function(index, nums) {
    const self = nums[index];
    let findArr = [];
    if (index !== nums.length - 1) {
        // 不是最后一个
        findArr = nums.slice(index + 1).concat(nums.slice(0, index + 1));
    } else {
        // 是最后一个
        findArr = nums.slice(0, nums.length);
    }
    for (let i = 0; i < findArr.length; i++) {
        if (findArr[i] > self) {
            return findArr[i];
        }
    }
    return -1;
}



// 优解
// 单调栈 + 循环数组
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(-1);
    const stk = [];
    for (let i = 0; i < n * 2 - 1; i++) {
        while (stk.length && nums[stk[stk.length - 1]] < nums[i % n]) {
            res[stk[stk.length - 1]] = nums[i % n];
            stk.pop();
        }
        stk.push(i % n)
    }
    return res;
}