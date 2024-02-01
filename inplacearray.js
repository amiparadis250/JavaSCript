// Write a Javascript function that takes an array of numbers and return a reversed version. 
// Note: here you are not allowed to use an intermediary array. You need to use the same array 
// passed in the parameter and just reverse its content. 
// Do not use inbuilt functions like reverse(). Just use loops and conditions.
function arrayReverse(arr) {
    for (let i = 0, j = arr.length - 1; i < j; ++i, j--) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  let marks = [32, 22.54, 87];
  arrayReverse(marks);
  console.log(marks);
  