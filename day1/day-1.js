const nums = [1, 4, 5, 3, 5, 3];
console.log(nums);

var removeElement = function (nums, val) {
  var j = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[j++] = nums[i];
    }
  }
  return j;
};

console.log(removeElement(nums, 5));
