// 示例1：
// 输入: nums = [2, 7, 11, 15], target = 9
// 输出: [0, 1]

// 示例2：
// 输入：nums = [3,2,4], target = 6
// 输出：[1, 2]

// 示例3：
// 输入：nums = [3,3], target = 6
// 输出：[0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      const idx = nums.indexOf(diff);
      if (idx > -1 && idx !== i) {
        return [idx, i];           
      }
  }
};

// 最优的解法？
var twoSum2 = function (nums, target) {
  const tmp = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (tmp.hasOwnProperty(diff)) {
      return [tmp[diff], i]
    }
    tmp[num[i]] = i
  }
}