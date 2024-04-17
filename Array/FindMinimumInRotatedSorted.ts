const findMin = (nums: number[]): number => {
  let min = 5001;

  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    console.log(l, r, m);

    min = Math.min(min, nums[m]);
    if (nums[m] > nums[r]) {
      l = m + 1;
    } else {
      r = m - 1;
      console.log(r);
    }
  }

  return min;
};

// const arry = [3,4,5,1,2];
const arry = [1, 2, 3, 4];
console.log(findMin(arry));

// function sepFunc(nums: number[]): number[] {
//   const tmp = [...nums]
//   const length = nums.length;
//   const sepIndex = Math.floor(length / 2);
//   const left = tmp.splice(0, sepIndex+1);
//   const right = tmp.splice(-sepIndex);
//   const sepNum = nums[sepIndex];
//   if (left[sepIndex] <= sepNum && sepNum <= nums[sepIndex+1]) {
//     return left;
//   } else {
//     return right;
//   }
// }
