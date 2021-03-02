// Example
// Input: [{a: 2}, { a: 3 }, {a: 4}, {b: 3}, {b: 8}, {c: 9}, {e: 7}]
// Output: {a: 2, b: 3, c: 9, e: 7}, {a: 3, b: 8}, {a: 4}

// TODO 思路
// 1. 找出所有的key
// 2. 相同key值得对象生成二维数组
// 3. 找出最大循环数
// 4. 输出

var arr = [{a: 2}, { a: 3 }, {a: 4}, {b: 3}, {b: 8}, {c: 9}, {e: 7}];

var arr1 = [], keys = [], max = 0;

function findSameItem(key) {
  var sameItems = [];
  for (var i = 0; i < arr.length; i++) {
     if (Object.keys(arr[i])[0] === key) {
       sameItems.push(arr[i])
     }
  }
  return sameItems;
}

for(var i = 0; i < arr.length; i++) {
  const key = Object.keys(arr[i])[0];
  if (!keys.includes(key)) {
     keys.push(key);
  }
}

for(var i = 0; i < keys.length; i++) {
  const item = findSameItem(keys[i]);
  arr1.push(item);
}

console.log(arr1);
// 找出最大循环数
max = arr1[0].length;
for(var i = 0; i < arr1.length; i++) {
   if (arr1[i].length >= max) {
     max = arr1[i].length;
   }
}2

console.log('max loop', max);
for (var i = 0; i < max; i++) {
   var obj = {}
   for (var j = 0; j < arr1.length; j++) {
     if (arr1[j][i]) {
       obj[Object.keys(arr1[j][i])[0]] = arr1[j][i][Object.keys(arr1[j][i])[0]]
     }
   }
   console.log(obj);
}

