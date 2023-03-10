const nums = [1, 2, 3, 4, 5, 6, 7];
[5, 6, 7, 1, 2, 3, 4];
let k = 3;

var rotate = function (nums, k) {
  //get the length of the array
  const len = nums.length;
  // get the remainder of the len and the k param
  k = k % len;

  let sliceArray = nums.splice(len - k);

  // append the slice array to the beginning

  nums.splice(0, 0, ...sliceArray);
};

console.log(rotate(nums, k));

