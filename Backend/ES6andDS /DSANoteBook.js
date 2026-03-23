// (Traversal Pattern)
// let max = nums[0];

// for (let n of nums) {
//   if (n > max) {
//     max = n;
//   }
// }

// console.log(max);  
//o(n)


// nums = [5, 1, 5, 3, 9]

// function MediumTransition(nums){
//   let first = -Infinity
//   let second =-Infinity
//   for(let n of nums){
//     if(n>first){
//       second=first
//       first=n
//     }
//     else if(n<first && n >second ){
//       second = n
//     }
//   }
//   return second === -Infinity ? -1 : second

// }

// console.log(MediumTransition(nums))

// let first = -Infinity
// if(5>first){
// console.log(first)
// }

nums = [2, 7, 11, 15]
target=9
function TwoSum(nums,target){
  left=0
  right=nums.length-1
  while(left<right){
      total=nums[right]+nums[left]
    if(total>target){
      right--
    }
    else if(total<target){
      left++
    }
    else {
      return [left,right]
    }
  }
  return []
}

console.log(TwoSum(nums,target))