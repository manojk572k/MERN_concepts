// 1) let and const  are the block level scope {} mostly used let and const
// var is only used for global scope but not recommended

// 2) Arrow function
// Why arrow function is created 
// The main reson is to fix This keyword for function state not window site so there is see undefined or empty 
// Ex: function () which creates this by default if the function is plain then it will be undefined or empty (global scope)
//  In here arrow fucntion is used to resuse the this in surrounding function it utilizes it 
// const myObjects ={
//   myname : "Manoj",
//   Greet:function(){
//     return () => setTimeout(()=>{
//       console.log(this.myname)
//     },1000)
//   }
// }
// const fn =myObjects.Greet()
// fn()

// const myObject ={
//   myname : "Kumar",
//   Greet:function(){
//     setTimeout(()=>{
//       console.log(this.myname)
//     },1000)
//   }
// }
// myObject.Greet()

// 3)Template iterals enhance the string interpolation
// used `` to put any value which sync with the string then `Sting sync ${}`

// 4)destructuring assignment
// Allows unpacking values from an object or arrays can be retrieve the data 
// level 1: object destructuring 
// const user = { Name: "Manoj", age: 26 };
// const {Name,age} =user
// console.log(Name,age)
// level 2: renaming variables
// const user = { Name: "Manoj", age: 26 };
// const {Name:UserName} =user
// console.log(UserName)
// level3: default values:
// const user = { Name: "Manoj" };
// const {Name, age=18} =user
// console.log(age)
// level4: array destructuring
// const user = [10,20,30]
// const [a,b,c]=user
// console.log(a)
// level5:restoperator destructuring 
// const user = [1,2,34,5,6,7,7,8]
// const [a,b,...c]=user
// console.log(c)
// for objects
// const user = { Id:1,Name: "Manoj", age: 26 };
// const {Id,...UserInfo} =user 
// console.log(UserInfo)
// level6: nested object destructuring
// const user = {
//   profile: {
//     name: "Manoj",
//     skills: {
//       primary: "JS"
//     }
//   }
// };
// const {profile:{name:UserName,skills:{primary:Skills}}}=user
// console.log(UserName,Skills)
// level7:swap variables destructuring
// let a = 5, b = 10;
// [a,b]=[b,a]
// console.log(a,b)
//level8:destructuring loops
// const users = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" }
// ];

// for(const{id,name} of users){ **************
//   console.log(id,name)
// }
// level9: destructuring with return values 
// function getUser(){
//   return {Name:"Manoj",age:26}
// }
// const{Name,age}=getUser()
// console.log(Name)

// console.log(age)

// destructuring traps: 1
// const { length } = "hello";
// console.log(length); // 5
// const { ...lengths } = "hello";
// console.log(lengths); // 5
// trap 2
// const [a, b] = "hi";
// console.log(a, b); // h i

// 5)Default parameters // selecting a default value in fucntion() which give default variable in console
//making it easier to handle function calls without providing arguments every time.
// function multiply(a, b = 1) {
//     return a * b;
// }
// console.log(multiply(a=5))

//6) spread and rest operator
// The spread operator allows for expanding iterable elements. It’s particularly useful for merging arrays or creating copies:

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined); // [1, 2, 3, 4, 5, 6]
// The rest operator allows a variable number of arguments in function declarations:

// function sum(...numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sum(1, 2, 3, 4)); // 10


