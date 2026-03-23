// Arrays in DSA / LeetCode, explained step-by-step in a simple, interview-ready way.

// A) Traversal Pattern

// nums = [1, 2, 3, 4]
// console.log(nums.reduce((total,n)=>total+n,0))

// nums = [1, 2, 6, 7, 10]
// let count=nums.filter(n=>n%2==0).length
// console.log(count)

// nums = [5, 1, 5, 3, 9]
// function secondLargestNum(nums){
//   let r=nums.length-1
//   let l=0
//   let sorted=nums.sort((a,b)=>a-b)
//   if(nums[r]>nums[r-1]){
//     return nums[r-1]
//   }
// }
// console.log(secondLargestNum(nums))

// B) Two Pointer Pattern
//pattern
// let arr=[1, 2, 3]
// let left=0
// let right=arr.length-1
// let reversedNums =[]
// while(left<right){
//   // reversedNums.push(arr[right])
//   arr[left],arr[right]=arr[right],arr[left]
//   right--;
//   left++;
// }
// console.log(arr)

// let ar = "racecar"

// function anagramTwoPointer(arr){
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     if (arr[left] != arr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log(anagramTwoPointer(ar))


//Two sum sorted array
// nums = [-1, -2, 1, 2, 3]. edge test cases
// target = 0

// nums = [1, 9, 13, 20, 47]
// target = 10
// // Output: [0, 1]

// function twoSortedArray(nums,target){
//   let left = 0;
//   let right = nums.length - 1;
//   let sum = 0;
//     // nums.filter(item => item)
//     while(left<right){
//       sum = nums[left]+nums[right]

//       if(sum<target){
//         left++
//       }
//       else if(sum>target){
//         right--
//       }
//       else if(sum==target){
//         return `[${left},${right}]`
//       }
//     }
//     return `[]`
// }
// console.log(twoSortedArray(nums,target))


// C) Sliding Window Pattern

//MAXSUB Array
// nums = [2, 1, 5, 1, 3, 2]
// k = 3
// //loop with k
// //output =9
//   function largerKSlidingWindow(nums,k){
//     let l=0 
//     let windowSum=0
//     let maxWindowSum;
//     if(nums.length<k)return null
//     if(k<=0) return 0
//     // else if ()
//     while(l<k){
//       windowSum+=nums[l]
//       l++
//     }
//     maxWindowSum=windowSum
//     for(let right=k;right<nums.length;right++){
//       windowSum+=nums[right]
//       windowSum-=nums[right-k]
//       if(maxWindowSum<windowSum)
//       maxWindowSum=windowSum
//     }
//     return maxWindowSum
   
//   }
//   console.log(largerKSlidingWindow(nums,k))


//MINSUB Array
// nums = [3, 1, 2, 6, 2]
// k = 2
// //loop with k
// //output =3
//   function smallestKSlidingWindow(nums,k){
//     let l=0 
//     let windowSum=0
//     let maxWindowSum;
//     if(nums.length<k)return null
//     if(k<=0) return 0
//     // else if ()
//     while(l<k){
//       windowSum+=nums[l]
//       l++
//     }
//     maxWindowSum=windowSum
//     for(let right=k;right<nums.length;right++){
//       windowSum+=nums[right]
//       windowSum-=nums[right-k]
//       if(maxWindowSum>windowSum)
//       maxWindowSum=windowSum
//     }
//     return maxWindowSum
   
//   }
//   console.log(smallestKSlidingWindow(nums,k))  


//Medium 3 — Longest Subarray with Sum ≤ K
// nums = [2, 1, 5, 1, 3], k = 7
// // output = 3 length 
// function LongestSubArrayWithSumK(nums,k){
//     let sum=0 
//     let right=0
//     let left=0
//     let maxIndex=0
//     for( right;right<nums.length;right++){
//         sum+=nums[right]
//         while(sum > k){
//           sum-=nums[left]
//           left++
//         }  
//         maxIndex = Math.max(maxIndex,right-left+1)
//     }
//     return maxIndex
// }
// console.log(LongestSubArrayWithSumK(nums,k))


// D) Prefix Sum Pattern
// let arr=[1, 2, 3]
//   function RunningSum(arr){
//   let prefix=[];
//   // prefix[0] =arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if(i>=1){
//     prefix[i] = prefix[i-1] /*previous*/+ arr[i]/*Curr*/;
//   }
//   else{
//     prefix[0]=arr[0]
//   }
//   }
//     return prefix
//   }
//  console.log(RunningSum(arr) )

// Range Sum Query
  // nums = [1, 2, 3, 4]
  // query = [1, 3]
  // function RangeSumQuery(nums,query){
  // let l=query[0]
  // let r=query[1]
  // let prefix=[]
  // prefix[0]=nums[0]
  // let rangeSum=0
  // for(let i=0;i<nums.length;i++){
  //   if(i>=1){
  //     prefix[i]=prefix[i-1]+nums[i]
  //   }
  // }
  // rangeSum = prefix[r]-prefix[l-1]
  // return rangeSum

  // }
  // console.log(RangeSumQuery(nums,query))

  // E) Hashing / Frequency Pattern

// Easy 1 — First Duplicate
// nums = [2, 1, 3, 5, 3, 2]
//   let freq={}

//   for(let n of nums){
//     freq[n]=(freq[n] || 0 ) + 1 
//     if(freq[n]===2){
//           console.log(n)
//           break
//     }
//   }

// Easy 2 — Check Anagram
// let s = "listen"
// let t = "silent"
// function isAnagram(s,t){
// let sobject ={}
// for(let sword of s){
//   sobject[sword] =(sobject[sword] || 0)+1
// }
// let tobject ={}
// for(let tword of t){
//   tobject[tword] =(tobject[tword]  || 0)+1
// }

// for(let word of t){
//    if(sobject[word]!==tobject[word]){
//     return false
//   }
// }
// return true
// }
// console.log(isAnagram(s,t) ? "true" : "false")

  
// Medium 3 — Longest Substring Without Repeating Characters
// s = "pwwkew"
// function LongestSubarray(s){
// let f={}
// let maxSubarray=0
// let left=0
// for(let right=0;right<s.length;right++){
//   let ch= s[right]
//   f[ch]=(f[ch]||0)+1
//   while(f[ch]>1){
//     let leftchar=s[left]
//     f[leftchar]--
//       if(f[leftchar]==0)
//       delete f[leftchar]
//     left++
//   }
//    maxSubarray = Math.max(maxSubarray,right-left+1)
// }
// return maxSubarray
// }
// console.log(LongestSubarray(s))

// F) Sorting + Logic Pattern
// nums = [4, 2, 2, 3, 4, 1]

// let set = new Set()

// nums.forEach(n => set.add(n))

// let unique = [...set]   // Convert Set to Array
// console.log(unique)
// unique.sort((a,b)=>a-b)
// console.log(unique)


// a = [1, 3, 5]
// b = [2, 4, 6]
// let m = [...a,...b]
// console.log(m.sort((a,b)=>a-b))
// console.log(a.sort((a,b)=>a-b))