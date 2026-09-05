// let nums = [1, 2, 3, 4, 5];

// nums.splice(1,2);
// console.log(nums);

let language=["java", "python", "cpp"];
language.splice(1,1, "javascript");
console.log(language);

let a2=[ 10, 12.33, "true", true ];
a2.sort();
console.log(a2);

// concat method
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=arr1.concat(arr2);
console.log(arr3);

// slice method
let a=[1,2,3,4,5];
let s =a.slice(1,3);
console.log(s);

// pop function
let fruits = ["apple", "banana", "orange"];
let removed = fruits.pop();
console.log(removed);
console.log(fruits);

// shift function
let removed1= fruits.shift();
console.log(removed1);
console.log(fruits);

// reverse function
let a1=[1,2,3,4,5];
a1.reverse();
console.log(a1);



spread operator
let ar1=[1,2,3];
let ar2=[4,5,6];
ar2