let nums = [1, 2, 3, 6 ,2];
// map() transforms elements but keeps array length same.
// oldnums = nums.map(n=> n*2)
// console.log(oldnums)

// filter() removes elements that fail the condition.
// evens=nums.filter(n=>n%2==0)
// console.log(evens)

// array.reduce((accumulator, currentValue) => newAccumulator, initialValue)
// combine = nums.reduce((total,n)=>total+n,0)
// console.log(combine) 

//find() — Get first matching element
// findingabove5= nums.find(n=>n>5)
// console.log(findingabove5)

//some() — Check if ANY element matches
// someValueIs=nums.some(n=>n>5)
// console.log(someValueIs)

//every() — Check if ALL elements match
// everyValueIs=nums.every(n=>n>5)
// console.log(everyValueIs)


let arr = [1, [2, [3]]];
// flat() — Flatten nested arrays/
// console.log(arr.flat(1))

// sort() — Sort array
// Example: Sort numbers properly
// let sorting = nums.sort((a,b)=>a-b);
// console.log(sorting)

//foreach
// nums.forEach(n=>console.log(n))