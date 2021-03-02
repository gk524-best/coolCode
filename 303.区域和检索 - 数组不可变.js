// 给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。

// 实现 NumArray 类：

// Example
// NumArray(int[] nums) 使用数组 nums 初始化对象
// int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）

// 输入：
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// 输出：
// [null, 1, -1, -3]

// 解释：
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
// numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
// numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))

/**
 * 我的解法
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
};

/** 
* @param {number} i 
* @param {number} j
* @return {number}
*/
NumArray.prototype.sumRange = function(i, j) {
  const nums = this.nums;
  const result = nums.reduce((pre, cur, idx) => {
      if (idx >= i && idx <= j) {
          pre+=cur;
      }
      return pre;
  }, 0)
  return result
};


/**
 * 优解
 */
var NumArray1 = function (nums) {
  const sums = new Int32Array(nums.length)
  sums[0] = nums[0]
  for (let i = 1; i< nums.length; i++) sums[i] = sums[i - 1] + nums[i]
  this.sums = sums
}

NumArray1.prototype.sumRange = function (i, j) {
  return this.sums[j] - (i ? this.sums[i - 1] : 0)
}