const nums = [3, 0, 1];

function missingNum(nums) {
  const gSum = (nums.length * (nums.length + 1)) / 2;
  const rSum = nums.reduce((acc, el) => acc + el, 0);
  return gSum - rSum;
}
console.log(missingNum(nums));
