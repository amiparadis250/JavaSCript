// Write a Javascript function that takes an array of numbers and return a reversed version
function Arrayreverse(arr){
  let newArray=[];
  for(let i =arr.length-1;i>=0;--i){
    newArray.push(arr[i]);
  }
  return newArray;
}
//testing
let marks = [23,45,78,90];
let marks2 = [23,45,78,90,'ISHIMWE',"Ami Paradis",78,66,23];
console.log(Arrayreverse(marks));
console.log(Arrayreverse(marks2));
